import test from 'node:test'
import assert from 'node:assert/strict'
import request from 'supertest'
import app from '../src/app.js'

test('GET /api/health devuelve estado 200', async () => {
    const response = await request(app).get('/api/health')

    assert.equal(response.status, 200)
    assert.equal(response.body.status, 'ok')
})

test('GET /api/events devuelve una lista de eventos', async () => {
    const response = await request(app).get('/api/events')

    assert.equal(response.status, 200)
    assert.equal(response.body.status, 'success')
    assert.ok(Array.isArray(response.body.payload))
})

test('GET /api/sessions devuelve estado 200', async () => {
    const response = await request(app).get('/api/sessions')

    assert.equal(response.status, 200)
    assert.equal(response.body.status, 'success')
})

test('Una ruta inexistente devuelve estado 404', async () => {
    const response = await request(app).get('/api/ruta-inexistente')

    assert.equal(response.status, 404)
    assert.equal(response.body.status, 'error')
})