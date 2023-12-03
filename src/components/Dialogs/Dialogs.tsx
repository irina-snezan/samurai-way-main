import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogsType = {
title: string
}
const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_content}>
                <div className={classes.dialogs_items}>
                    <div className={classes.dialog_user + ' ' + classes.active}>
                        <NavLink to="/Olga">Olga</NavLink>
                    </div>
                    <div className={classes.dialog_user + ' ' + classes.active}>
                        <NavLink to="/Gleb">Gleb</NavLink>
                    </div>
                    <div className={classes.dialog_user + ' ' + classes.active}>
                        <NavLink to="/Julia">Julia</NavLink>
                    </div>
                    <div className={classes.dialog_user + ' ' + classes.active}>
                        <NavLink to="/Denis">Denis</NavLink>
                    </div>
                    <div className={classes.dialog_user + ' ' + classes.active}>
                        <NavLink to="/Petr">Petr</NavLink>
                    </div>

                </div>
                <div className={classes.messages}>
                    <div className={classes.message_user}>Hello!</div>
                    <div className={classes.message_user}>Great idea!</div>
                    <div className={classes.message_user}>See you later!</div>
                    <div className={classes.message_user}>I have new job.</div>
                    <div className={classes.message_user}>Do you have any pets?</div>
                </div>




                {/*<div>*/}
                {/*    <textarea placeholder="Enter your message"></textarea>*/}
                {/*    <button>Send message</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};

export default Dialogs;