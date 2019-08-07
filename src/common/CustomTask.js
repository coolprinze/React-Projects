import React from 'react'
import { todayIs, todayIsBefore } from './Helpers';
import Moment from 'react-moment';

export const CustomTask = ({task, className}) => {
  return (
    <div className={ className+" alert w-100" } >
      <strong>{ task.title }</strong>
      <a  href={ null } className="btn btn-sm btn-outline-success float-right">Done</a>
      <br/>
      {!todayIs(task.due_date)? <small>Due <Moment fromNow>{task.due_date}</Moment> </small> : ''}
    </div>
  )
}

