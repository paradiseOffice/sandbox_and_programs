 /****************************************************************************
 **
 ** Copyright (C) 2014 Digia Plc and/or its subsidiary(-ies).
 ** Contact: http://www.qt-project.org/legal
 **
 ** This file is part of the demonstration applications of the Qt Toolkit.
 **
 ** $QT_BEGIN_LICENSE:LGPL$
 ** Commercial License Usage
 ** Licensees holding valid commercial Qt licenses may use this file in
 ** accordance with the commercial license agreement provided with the
 ** Software or, alternatively, in accordance with the terms contained in
 ** a written agreement between you and Digia.  For licensing terms and
 ** conditions see http://qt.digia.com/licensing.  For further information
 ** use the contact form at http://qt.digia.com/contact-us.
 **
 ** GNU Lesser General Public License Usage
 ** Alternatively, this file may be used under the terms of the GNU Lesser
 ** General Public License version 2.1 as published by the Free Software
 ** Foundation and appearing in the file LICENSE.LGPL included in the
 ** packaging of this file.  Please review the following information to
 ** ensure the GNU Lesser General Public License version 2.1 requirements
 ** will be met: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html.
 **
 ** In addition, as a special exception, Digia gives you certain additional
 ** rights.  These rights are described in the Digia Qt LGPL Exception
 ** version 1.1, included in the file LGPL_EXCEPTION.txt in this package.
 **
 ** GNU General Public License Usage
 ** Alternatively, this file may be used under the terms of the GNU
 ** General Public License version 3.0 as published by the Free Software
 ** Foundation and appearing in the file LICENSE.GPL included in the
 ** packaging of this file.  Please review the following information to
 ** ensure the GNU General Public License version 3.0 requirements will be
 ** met: http://www.gnu.org/copyleft/gpl.html.
 **
 ** ***************************************************************************
 ** 
 ** $QT_END_LICENSE$
 **
 ** Although the original was an example I've changed a lot of code to extend
 ** this   program. 
 ** (c) Hazel Windle, for useful bits beyond the original QTextEdit application.
 **
 ****************************************************************************/

 #include "textedit.h"

 #include <QAction>
 #include <QApplication>
 #include <QClipboard>
 #include <QColorDialog>
 // #include <QComboBox>
 #include <QFontComboBox>
 #include <QFile>
 #include <QFileDialog>
 #include <QFileInfo>
 #include <QFontDatabase>
 #include <QMenu>
 #include <QMenuBar>
 #include <QPrintDialog>
 #include <QPrinter>
 #include <QTextCodec>
 #include <QTextEdit>
 #include <QToolBar>
 #include <QTextCursor>
 #include <QTextDocumentWriter>
 #include <QTextList>
 #include <QtDebug>
 #include <QCloseEvent>
 #include <QMessageBox>
 #include <QPrintPreviewDialog>

 #ifdef Q_WS_MAC // change these to the two separate theme dirs.
 const QString rsrcPath = ":/images/mac";
 #else
 const QString rsrcPath = ":/images/win";
 #endif

 TextEdit::TextEdit(QWidget *parent)
     : QMainWindow(parent)
 {
     setToolButtonStyle(Qt::ToolButtonFollowStyle);
     setupFileActions();
     setupEditActions();

     setWindowIcon(QIcon(rsrcPath + "/logo32.png"));

     {
         QMenu *helpMenu = new QMenu(tr("Help"), this);
         menuBar()->addMenu(helpMenu);
         helpMenu->addAction(tr("About"), this, SLOT(about()));
         helpMenu->addAction(tr("About &Qt"), qApp, SLOT(aboutQt()));
     }

     textEdit = new QTextEdit(this);
     connect(textEdit, SIGNAL(currentCharFormatChanged(QTextCharFormat)),
             this, SLOT(currentCharFormatChanged(QTextCharFormat)));
     connect(textEdit, SIGNAL(cursorPositionChanged()),
             this, SLOT(cursorPositionChanged()));

     setCentralWidget(textEdit);
     textEdit->setFocus();
     setCurrentFileName(QString());



     connect(textEdit->document(), SIGNAL(modificationChanged(bool)),
             actionSave, SLOT(setEnabled(bool)));
     connect(textEdit->document(), SIGNAL(modificationChanged(bool)),
             this, SLOT(setWindowModified(bool)));
     connect(textEdit->document(), SIGNAL(undoAvailable(bool)),
             actionUndo, SLOT(setEnabled(bool)));
     connect(textEdit->document(), SIGNAL(redoAvailable(bool)),
             actionRedo, SLOT(setEnabled(bool)));

     setWindowModified(textEdit->document()->isModified());
     actionSave->setEnabled(textEdit->document()->isModified());
     actionUndo->setEnabled(textEdit->document()->isUndoAvailable());
     actionRedo->setEnabled(textEdit->document()->isRedoAvailable());

     connect(actionUndo, SIGNAL(triggered()), textEdit, SLOT(undo()));
     connect(actionRedo, SIGNAL(triggered()), textEdit, SLOT(redo()));

     actionCut->setEnabled(false);
     actionCopy->setEnabled(false);

     connect(actionCut, SIGNAL(triggered()), textEdit, SLOT(cut()));
     connect(actionCopy, SIGNAL(triggered()), textEdit, SLOT(copy()));
     connect(actionPaste, SIGNAL(triggered()), textEdit, SLOT(paste()));

     connect(textEdit, SIGNAL(copyAvailable(bool)), actionCut, SLOT(setEnabled(bool)));
     connect(textEdit, SIGNAL(copyAvailable(bool)), actionCopy, SLOT(setEnabled(bool)));

 #ifndef QT_NO_CLIPBOARD
     connect(QApplication::clipboard(), SIGNAL(dataChanged()), this, SLOT(clipboardDataChanged()));
 #endif

     QString initialFile = "";
     const QStringList args = QCoreApplication::arguments();
     if (args.count() == 2)
         initialFile = args.at(1);

     if (!load(initialFile))
         fileNew();
 }

 void TextEdit::closeEvent(QCloseEvent *e)
 {
     if (askForSave())
         e->accept();
     else
         e->ignore();
 }

 void TextEdit::setupFileActions()
 {
     QToolBar *tb = new QToolBar(this);
     tb->setWindowTitle(tr("File"));
     addToolBar(tb);

     QMenu *menu = new QMenu(tr("&File"), this);
     menuBar()->addMenu(menu);

     QAction *a;

     QIcon newIcon = QIcon(rsrcPath + "/filenew.png");
     a = new QAction( newIcon, tr("&New"), this);
     a->setPriority(QAction::LowPriority);
     a->setShortcut(QKeySequence::New);
     connect(a, SIGNAL(triggered()), this, SLOT(fileNew()));
     tb->addAction(a);
     menu->addAction(a);

     a = new QAction(QIcon(rsrcPath + "/fileopen.png"),
                     tr("&Open"), this);
     a->setShortcut(QKeySequence::Open);
     connect(a, SIGNAL(triggered()), this, SLOT(fileOpen()));
     tb->addAction(a);
     menu->addAction(a);

     menu->addSeparator();

     actionSave = a = new QAction(QIcon(rsrcPath + "/filesave.png"),
                                  tr("&Save"), this);
     a->setShortcut(QKeySequence::Save);
     connect(a, SIGNAL(triggered()), this, SLOT(fileSave()));
     a->setEnabled(false);
     tb->addAction(a);
     menu->addAction(a);

     a = new QAction(tr("Save &As..."), this);
     a->setPriority(QAction::LowPriority);
     connect(a, SIGNAL(triggered()), this, SLOT(fileSaveAs()));
     menu->addAction(a);
     menu->addSeparator();

 #ifndef QT_NO_PRINTER
     a = new QAction(QIcon(rsrcPath + "/fileprint.png"),
                     tr("&Print"), this);
     a->setPriority(QAction::LowPriority);
     a->setShortcut(QKeySequence::Print);
     connect(a, SIGNAL(triggered()), this, SLOT(filePrint()));
     tb->addAction(a);
     menu->addAction(a);

     a = new QAction(QIcon(rsrcPath + "/fileprint.png"),
                     tr("Print &View"), this);
     connect(a, SIGNAL(triggered()), this, SLOT(filePrintPreview()));
     menu->addAction(a);

     a = new QAction(QIcon(rsrcPath + "/exportpdf.png"),
     tr("&Export PDF"), this);
     a->setPriority(QAction::LowPriority);
     a->setShortcut(Qt::CTRL + Qt::Key_D);
     connect(a, SIGNAL(triggered()), this, SLOT(filePrintPdf()));
     tb->addAction(a);
     menu->addAction(a);

     menu->addSeparator();
 #endif

     a = new QAction(tr("&Quit"), this);
     a->setShortcut(Qt::CTRL + Qt::Key_Q);
     connect(a, SIGNAL(triggered()), this, SLOT(close()));
     menu->addAction(a);
 }

 void TextEdit::setupEditActions()
 {
     QToolBar *tb = new QToolBar(this);
     tb->setWindowTitle(tr("Edit"));
     addToolBar(tb);
     QMenu *menu = new QMenu(tr("&Edit"), this);
     menuBar()->addMenu(menu);

     QAction *a;
     a = actionUndo = new QAction(QIcon(rsrcPath + "/editundo.png"),
                                               tr("&Undo"), this);
     a->setShortcut(QKeySequence::Undo);
     tb->addAction(a);
     menu->addAction(a);
     a = actionRedo = new QAction(QIcon(rsrcPath + "/editredo.png"),
                                               tr("&Redo"), this);
     a->setPriority(QAction::LowPriority);
     a->setShortcut(QKeySequence::Redo);
     tb->addAction(a);
     menu->addAction(a);
     menu->addSeparator();
     a = actionCut = new QAction(QIcon(rsrcPath + "/editcut.png"),
                                              tr("Cu&t"), this);
     a->setPriority(QAction::LowPriority);
     a->setShortcut(QKeySequence::Cut);
     tb->addAction(a);
     menu->addAction(a);
     a = actionCopy = new QAction(QIcon(rsrcPath + "/editcopy.png"),
                                  tr("&Copy"), this);
     a->setPriority(QAction::LowPriority);
     a->setShortcut(QKeySequence::Copy);
     tb->addAction(a);
     menu->addAction(a);
     a = actionPaste = new QAction(QIcon(rsrcPath + "/editpaste.png"),
                                   tr("&Paste"), this);
     a->setPriority(QAction::LowPriority);
     a->setShortcut(QKeySequence::Paste);
     tb->addAction(a);
     menu->addAction(a);
 #ifndef QT_NO_CLIPBOARD
     if (const QMimeData *md = QApplication::clipboard()->mimeData())
         actionPaste->setEnabled(md->hasText());
 #endif
 }


 bool TextEdit::load(const QString &f)
 {
     if (!QFile::exists(f))
         return false;
     QFile file(f);
     if (!file.open(QFile::ReadOnly))
         return false;

     QByteArray data = file.readAll();
     QTextCodec *codec = Qt::codecForHtml(data);
     QString str = codec->toUnicode(data);
     if (Qt::mightBeRichText(str)) {
         textEdit->setHtml(str);
     } else {
         str = QString::fromLocal8Bit(data);
         textEdit->setPlainText(str);
     }

     setCurrentFileName(f);
     return true;
 }

 bool TextEdit::askForSave()
 {
     if (!textEdit->document()->isModified())
         return true;
     if (fileName.startsWith(QLatin1String(":/")))
         return true;
     QMessageBox::StandardButton ret;
     ret = QMessageBox::warning(this, tr("Jotter"),
                                tr("The document has been modified.\n"
                                   "Do you want to save your changes?"),
                                QMessageBox::Save | QMessageBox::Discard
                                | QMessageBox::Cancel);
     if (ret == QMessageBox::Save)
         return fileSave();
     else if (ret == QMessageBox::Cancel)
         return false;
     return true;
 }

 void TextEdit::setCurrentFileName(const QString &fileName)
 {
     this->fileName = fileName;
     textEdit->document()->setModified(false);

     QString shownName;
     if (fileName.isEmpty())
         shownName = "new.txt";
     else
         shownName = QFileInfo(fileName).fileName();

     setWindowTitle(tr("%1[*] - %2").arg(shownName).arg(tr("Jotter")));
     setWindowModified(false);
 }

 void TextEdit::fileNew()
 {
     if (askForSave()) {
         textEdit->clear();
         setCurrentFileName(QString());
     }
 }

 void TextEdit::fileOpen()
 {
     QString fn = QFileDialog::getOpenFileName(this, tr("Open File"),
                                               QString(), tr("C++ Files (*.cpp *.h *.hpp);;All Files (*)"));
     if (!fn.isEmpty())
         load(fn);
 }

 bool TextEdit::fileSave()
 {
     if (fileName.isEmpty())
         return fileSaveAs();

     QTextDocumentWriter writer(fileName);
     bool success = writer.write(textEdit->document());
     if (success)
         textEdit->document()->setModified(false);
     return success;
 }

 bool TextEdit::fileSaveAs()
 {
     QString fn = QFileDialog::getSaveFileName(this, tr("Save As"),
                                               QString(), tr("C++ Files (*.cpp *.h *.hpp);;All Files (*)"));
     if (fn.isEmpty())
         return false;
     if (! (fn.endsWith(".cpp", Qt::CaseInsensitive) || fn.endsWith(".hpp", Qt::CaseInsensitive) || fn.endsWith(".c", Qt::CaseInsensitive)) )
         fn += ".txt"; // default
     setCurrentFileName(fn);
     return fileSave();
 }

 void TextEdit::filePrint()
 {
 #ifndef QT_NO_PRINTER
     QPrinter printer(QPrinter::HighResolution);
     QPrintDialog *dlg = new QPrintDialog(&printer, this);
     if (textEdit->textCursor().hasSelection())
         dlg->addEnabledOption(QAbstractPrintDialog::PrintSelection);
     dlg->setWindowTitle(tr("Print Document"));
     if (dlg->exec() == QDialog::Accepted) {
         textEdit->print(&printer);
     }
     delete dlg;
 #endif
 }

 void TextEdit::filePrintPreview()
 {
 #ifndef QT_NO_PRINTER
     QPrinter printer(QPrinter::HighResolution);
     QPrintPreviewDialog preview(&printer, this);
     connect(&preview, SIGNAL(paintRequested(QPrinter*)), SLOT(printPreview(QPrinter*)));
     preview.exec();
 #endif
 }

 void TextEdit::printPreview(QPrinter *printer)
 {
 #ifdef QT_NO_PRINTER
     Q_UNUSED(printer);
 #else
     textEdit->print(printer);
 #endif
 }

 void TextEdit::filePrintPdf()
 {
 #ifndef QT_NO_PRINTER
     QString fileName = QFileDialog::getSaveFileName(this, "Export PDF",
                                                     QString(), "*.pdf");
     if (!fileName.isEmpty()) {
         if (QFileInfo(fileName).suffix().isEmpty())
             fileName.append(".pdf");
         QPrinter printer(QPrinter::HighResolution);
         printer.setOutputFormat(QPrinter::PdfFormat);
         printer.setOutputFileName(fileName);
         textEdit->document()->print(&printer);
     }
 #endif
 }


 void TextEdit::currentCharFormatChanged(const QTextCharFormat &format)
 {

 }

 void TextEdit::cursorPositionChanged()
 {
 }

 void TextEdit::clipboardDataChanged()
 {
 #ifndef QT_NO_CLIPBOARD
     if (const QMimeData *md = QApplication::clipboard()->mimeData())
         actionPaste->setEnabled(md->hasText());
 #endif
 }

 void TextEdit::about()
 {
     QMessageBox::about(this, tr("About"), tr("Jotter is a lightweight text editor for programming"
                                              " or other writing tasks. Based on an example from Digia."));
 }

 void TextEdit::mergeFormatOnWordOrSelection(const QTextCharFormat &format)
 {
     QTextCursor cursor = textEdit->textCursor();
     if (!cursor.hasSelection())
         cursor.select(QTextCursor::WordUnderCursor);
     cursor.mergeCharFormat(format);
     textEdit->mergeCurrentCharFormat(format);
 }

void TextEdit::setTabWidth()
{

}

<<<<<<< HEAD
<<<<<<< HEAD
bool EventThingys::tabEvent(QObject *obj, QKeyEvent *event)
{
    const QString tabString = setTabWidth();
    QTextCursor insertCursor = textEdit->textCursor();

    if (((QKeyEvent*)event)->key() == Qt::Key_Tab) {
        // append tabWidth at the cursor position 
        // Look up Qtextedit append after cursor...
        insertCursor.insertText(tabString);
        return true;
    } else {
        // it's another key...
        return QObject::tabEvent(obj, event);
    }
=======
void TextEdit::tabEvent()
{
>>>>>>> parent of 6999569... finished setTabWidth function
=======
void TextEdit::tabEvent()
{
>>>>>>> parent of 6999569... finished setTabWidth function

}
