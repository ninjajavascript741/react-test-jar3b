import EventModel from "../models/event.model";
import React from "react";

interface Props {
    event: EventModel,
    className: string,
    onDeleteClicked: (eventId: number) => void,
    onSetUpdateState: (eventId: number) => void,
    onUnSetUpdateState: (eventId: number) => void,
    onSetDoneState: (eventId: number) => void,
    onUpdateEvent: (event: EventModel) => void
}

interface State {
    name: string
    classNamesByParent: string
}

export default class Event extends React.Component<Props, State> {
    constructor(public props: Props) {
        super(props)
        this.state = {
            name: this.props.event.name,
            classNamesByParent: this.props.className
        }
    }


    private _onChangeName(event: EventModel, name: string) {
        this.setState({name});
        this.props.onUpdateEvent({ ...event, name })
    }

    render() {
        const { event, onDeleteClicked, onSetUpdateState, onUnSetUpdateState, onSetDoneState, onUpdateEvent } = this.props;
        const { name, classNamesByParent } = this.state;
        return (
            <tr key={event.id} className={`${classNamesByParent} event ${event.done ? 'event--done': ''}`}>
                <td>
                    <input 
                        className="event__name" 
                        onChange={(e) => this._onChangeName(event, e.target.value)} 
                        value={name} 
                        disabled={!event.updateState}/>
                </td>
                <td className={`event__action-list event-action-list ${event.updateState ? 'event-action-list--update-state': ''}`}>
                    <button 
                        className="event-action-list__item event-action-list__item--delete" 
                        onClick={() => onDeleteClicked(event.id)} 
                    >[у]</button>
                    <button 
                        className="event-action-list__item event-action-list__item--set-update-state" 
                        onClick={() => onSetUpdateState(event.id)} 
                    >[и]</button>
                    <button 
                        className="event-action-list__item event-action-list__item--set-done" 
                        onClick={() => onSetDoneState(event.id)} 
                    >[з]</button>
                    <button 
                        className="event-action-list__item event-action-list__item--success" 
                        onClick={() => onUpdateEvent({ ...event, name, updateState: false })}
                    >[п]</button>
                    <button 
                        className="event-action-list__item event-action-list__item--cancel"
                        onClick={() => onUnSetUpdateState(event.id)}
                    >[о]</button>
                </td>
            </tr>
        )
    }
}