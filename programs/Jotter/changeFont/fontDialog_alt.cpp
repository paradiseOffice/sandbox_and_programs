
bool ok;
 QFont font = QFontDialog::getFont(
                 &ok, QFont("Helvetica [Cronyx]", 10), this);
 if (ok) {
     // the user clicked OK and font is set to the font the user selected
 } else {
     // the user canceled the dialog; font is set to the initial
     // value, in this case Helvetica [Cronyx], 10
 }

The dialog can also be used to set a widget's font directly:

 myWidget.setFont(QFontDialog::getFont(0, myWidget.font()));
