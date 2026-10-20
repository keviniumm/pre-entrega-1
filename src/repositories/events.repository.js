import eventsDao from '../dao/events.dao.js'

export const findAllEvents = async () => {
    return await eventsDao.getAll()
}