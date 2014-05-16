// in .h file:
QString setTabWidth();
void tabEvent(QKeyEvent *event, QString &tabWidth);

// implementation:
QString setTabWidth()
{
    QString initTabWidth = "    ";
    return initTabWidth;
}

void tabEvent(QKeyEvent *event, QString &setTabWidth())
{
    QTextCursor cursor = textCursor();

    if (((QKeyEvent*)event)->key() == Qt::Key_Tab) {
        // append tabWidth at the cursor position 
        // Look up Qtextedit append after cursor...

    }

    QTextEdit::keyPressEvent(event);    
}
    
