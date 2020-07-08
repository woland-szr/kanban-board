import React from 'react';
import './index.css';

const BoardFooter = ({activeTasks, finishedTasks}) => {
    return (
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="counters">
                        <div className="tasks">Active Tasks: {activeTasks}</div>
                        <div className="tasks">Finished Tasks: {finishedTasks}</div>
                    </div>
                    <div className="tasks">Kanban board by Oleg Ionov, 2020</div>
                </div>
            </footer>
            )
}

export default BoardFooter;