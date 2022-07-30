import classes from './Modal.module.css'

const Backdrop = (props) => {
    return (
        <div className={classes.Backdrop} />
    )

}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {

}

export default Modal