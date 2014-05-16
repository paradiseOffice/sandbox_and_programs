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
 **
 ** $QT_END_LICENSE$
 **
 ****************************************************************************/

 #ifndef TEXTEDIT_H
 #define TEXTEDIT_H

 #include <QMainWindow>
 #include <QMap>
 #include <QPointer>

 QT_FORWARD_DECLARE_CLASS(QAction)
 QT_FORWARD_DECLARE_CLASS(QTextEdit)
 QT_FORWARD_DECLARE_CLASS(QTextCharFormat)
 QT_FORWARD_DECLARE_CLASS(QMenu)
<<<<<<< HEAD
<<<<<<< HEAD



// The public QObject is for the event filter tabEvent...
=======
>>>>>>> parent of 6999569... finished setTabWidth function
=======
>>>>>>> parent of 6999569... finished setTabWidth function

 class TextEdit : public QMainWindow
 {
     Q_OBJECT

 public:
     TextEdit(QWidget *parent = 0);

 protected:
     virtual void closeEvent(QCloseEvent *e);


 private:
     void setupFileActions();
     void setupEditActions();
     bool load(const QString &f);
     bool askForSave();
     void setCurrentFileName(const QString &fileName);

 private slots:
     void fileNew();
     void fileOpen();
     bool fileSave();
     bool fileSaveAs();
     void filePrint();
     void filePrintPreview();
     void filePrintPdf();


     void currentCharFormatChanged(const QTextCharFormat &format);
     void cursorPositionChanged();

     void clipboardDataChanged();
     void about();
     void printPreview(QPrinter *);

 private:
     void mergeFormatOnWordOrSelection(const QTextCharFormat &format);
<<<<<<< HEAD
<<<<<<< HEAD
     QString setTabWidth();
=======
     void setTabWidth(); // Changed for setTabWidth function
     void tabEvent(); // Changes tab into spaces
>>>>>>> parent of 6999569... finished setTabWidth function
=======
     void setTabWidth(); // Changed for setTabWidth function
     void tabEvent(); // Changes tab into spaces
>>>>>>> parent of 6999569... finished setTabWidth function

     QAction *actionSave,
         *actionUndo,
         *actionRedo,
         *actionCut,
         *actionCopy,
         *actionPaste;

     QToolBar *tb;
     QString fileName;
     QTextEdit *textEdit;
 };

class EventThingys :  public QObject
{
    Q_OBJECT


protected:
    bool tabEvent(QObject *obj, QKeyEvent *event);
};


#endif

