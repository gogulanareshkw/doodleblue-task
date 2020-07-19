import { CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, START_CONVERSATION, END_CONVERSATION, CREATE_CONVERSATION } from '../actions/types';
const init_stae = {
	contactsList: [],
	selectedContact: {},
	allConversations: [],
	chatWith: {},
}

export default function (state = init_stae, action) {
	switch (action.type) {
		case SELECT_CONTACT:
			return { ...state, selectedContact: action.payload }
		case CREATE_CONTACT:
			return { ...state, contactsList: [...state.contactsList, action.payload] }
		case UPDATE_CONTACT:
			return { ...state, contactsList: state.contactsList.map(cont => cont.id === action.payload.id ? { ...cont, firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email, phone: action.payload.phone } : cont) }
		case DELETE_CONTACT:
			return { ...state, contactsList: state.contactsList.filter(cont => cont.id !== action.payload) }
		case START_CONVERSATION:
			return { ...state, chatWith: action.payload }
		case END_CONVERSATION:
			return { ...state, chatWith: {} }
		case CREATE_CONVERSATION:
			return { ...state, allConversations: [...state.allConversations, action.payload] }
		default: return state;
	}
}