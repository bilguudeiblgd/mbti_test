import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CyberioPopModal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={"flex py-2 justify-center"}>
                <div className={" absolute bottom-4"}>
                    <a className={"text-[rgb(255,217,61)] cursor-pointer border-2 px-2 py-1 font-medium text-xs rounded-full border-[rgb(255,217,61)]"} onClick={handleClickOpen}>
                        Тооцооллох арга
                    </a>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Cyberio's formula"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <article>
                            <p className={"text-sm"}>Cyberio formula нь таны хамгийн их оноотой 2 cognitive function-ийг аваад түүнтэй харгалзах type байх хэр магадлалтайг тооцоолдог.
                                Жишээ нь хамгийн {"'Ni'"} их оноотой бол INTJ, INFJ буюу {'Ni>Te>Fi>Se, Ni>Fe>Ti>'} Se хоёр бүлгийн аль их оноотойг авч үзнэ.
                                Түүнээс цаашлаад таны оноонууд яг тухайн дэс дараатай байгаа эсэхийг шалгана. Гэх мэтчилэн cognitive personality theory-гийн зүй тогтлуудыг ашиглан магадлалын оноо тооцоолж гаргана.
                            </p>
                            <h3 className={"font-semibold mt-3 my-1"}>Боломжит хариунууд</h3>
                            <p>X=2.5 - БАТТАЙ</p>
                            <p>X=2.0 - ӨНДӨР МАГАДЛАЛТАЙ</p>
                            <p>X=1.5 - САЙН МАГАДЛАЛТАЙ</p>
                            <p>X=1.0 - МАГАДЛАЛТАЙ</p>
                            <p>X=0.5 - БАГА МАГАДЛАЛТАЙ</p>
                            <p>X=0.0 - ТОДОРХОЙГҮЙ</p>
                            <p className={"text-sm mt-2"}>Энэ formula нь тестийн хариу хэр тодорхой вэ гэдгийг хэлэх зориулалттай
                            </p>
                        </article>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} autoFocus>
                        Хаах
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}