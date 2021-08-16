import profileReducer from './profile'
import { changeName, changeAge, changeShowName, changeIsAuthed } from '../Action/profile'

describe('profile reducer test', () => {
        let state = {
            name: "Kate", 
            age: 37,
            showName: true,
            isAuthed: false,
        }
    it('name should be changed on Sam', () => {

        let newState = profileReducer(state, changeName('Sam'))
        expect(newState.name).toBe('Sam')

    })
    it('age should be changed on 38', () => {

        let newState = profileReducer(state, changeAge(38))
        expect(newState.age).toBe(38)
    })

    it('flag showName should be changed on false', () => {

        let newState = profileReducer(state, changeShowName())
        expect(newState.showName).toBeFalsy
    })

    it('flag isAuthed should be changed on true', () => {

        let newState = profileReducer(state, changeIsAuthed(true))
        expect(newState.isAuthed).toBeTruly
    })
})

