import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }

   //Стрелочный синтаксис позволяет не байндить колбэки.
   activateEditMode = () => { this.setState({ editMode: true }) }
   deactivateEditMode = () => {
      this.setState({ editMode: false });
      this.props.updateStatus(this.state.status);
   }

   onStatusChange = (e) => {
      this.setState({ status: e.currentTarget.value })

   }

   // componentDidUpdate -эта функция нужна для того, чтобы своевременно обновлять стейт и компоненту с ним связанную. Но с ним у мнея работает хуже. Если будут проблемы, см. урок 74.
   componentDidUpdate(prevProps, prevState) {
      // if (this.props.status !== prevState.status) {
      //    this.setState({ status: this.props.status });
      // }
   }

   render() {
      return (
         <div className={`${s.Status}`}>
            {
               !this.state.editMode
                  ? <div>
                     <span onDoubleClick={this.activateEditMode}>{
                        this.props.status
                           ? this.props.status
                           : `create your status`
                     }
                     </span>
                  </div>
                  : <div>
                     <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange} />
                  </div>
            }
         </div>
      )
   }

}

export default ProfileStatus;
