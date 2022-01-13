const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    messages: [{message: 'test message'}],
    newMessage: '',
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.message;
            return state;
        case SEND_MESSAGE:
            const newMessage = {
                message: state.newMessage,
            };
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        default: return state;
    }

}

export const sedMessageCreator = () => ({ type: SEND_MESSAGE, });
export const updateNewMessageCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE, message: text, });

export default messageReducer;