/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.0.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QFrame>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QTabWidget>
#include <QtWidgets/QTableView>
#include <QtWidgets/QToolBar>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralWidget;
    QFrame *menubar;
    QFrame *commonbar;
    QFrame *frame;
    QTabWidget *fileport;
    QWidget *tab;
    QWidget *tab_2;
    QTableView *tableView;
    QPushButton *settings;
    QMenuBar *menuBar;
    QToolBar *mainToolBar;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QStringLiteral("MainWindow"));
        MainWindow->resize(824, 544);
        centralWidget = new QWidget(MainWindow);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        menubar = new QFrame(centralWidget);
        menubar->setObjectName(QStringLiteral("menubar"));
        menubar->setGeometry(QRect(10, 0, 801, 31));
        menubar->setFrameShape(QFrame::StyledPanel);
        menubar->setFrameShadow(QFrame::Raised);
        commonbar = new QFrame(centralWidget);
        commonbar->setObjectName(QStringLiteral("commonbar"));
        commonbar->setGeometry(QRect(10, 40, 801, 31));
        commonbar->setFrameShape(QFrame::StyledPanel);
        commonbar->setFrameShadow(QFrame::Raised);
        frame = new QFrame(centralWidget);
        frame->setObjectName(QStringLiteral("frame"));
        frame->setGeometry(QRect(80, 460, 741, 20));
        frame->setFrameShape(QFrame::StyledPanel);
        frame->setFrameShadow(QFrame::Raised);
        fileport = new QTabWidget(centralWidget);
        fileport->setObjectName(QStringLiteral("fileport"));
        fileport->setGeometry(QRect(10, 80, 631, 371));
        tab = new QWidget();
        tab->setObjectName(QStringLiteral("tab"));
        fileport->addTab(tab, QString());
        tab_2 = new QWidget();
        tab_2->setObjectName(QStringLiteral("tab_2"));
        tableView = new QTableView(tab_2);
        tableView->setObjectName(QStringLiteral("tableView"));
        tableView->setGeometry(QRect(50, 20, 256, 192));
        fileport->addTab(tab_2, QString());
        settings = new QPushButton(centralWidget);
        settings->setObjectName(QStringLiteral("settings"));
        settings->setGeometry(QRect(10, 460, 71, 21));
        MainWindow->setCentralWidget(centralWidget);
        menuBar = new QMenuBar(MainWindow);
        menuBar->setObjectName(QStringLiteral("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 824, 20));
        MainWindow->setMenuBar(menuBar);
        mainToolBar = new QToolBar(MainWindow);
        mainToolBar->setObjectName(QStringLiteral("mainToolBar"));
        MainWindow->addToolBar(Qt::TopToolBarArea, mainToolBar);
        statusBar = new QStatusBar(MainWindow);
        statusBar->setObjectName(QStringLiteral("statusBar"));
        MainWindow->setStatusBar(statusBar);

        retranslateUi(MainWindow);

        fileport->setCurrentIndex(1);


        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QApplication::translate("MainWindow", "appName", 0));
        fileport->setTabText(fileport->indexOf(tab), QApplication::translate("MainWindow", "file1", 0));
        fileport->setTabText(fileport->indexOf(tab_2), QApplication::translate("MainWindow", "file2", 0));
        settings->setText(QApplication::translate("MainWindow", "settings", 0));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
