import {jest} from '@jest/globals';
import {Graphic} from '../dist/svg-turtle.esm'

test('that graphic is created', () => {
    const g = new Graphic();
    expect(g).toHaveProperty('currentX');
})

test('that turtle starts at 0,0', () => {
    const g = new Graphic();
    expect(g).toHaveProperty('currentX');
    expect(g).toHaveProperty('currentY');
    expect(g.currentX).toBe(0);
    expect(g.currentY).toBe(0);
})

test('pos function', () => {
    const g = new Graphic();
    expect(g.pos()).toStrictEqual([0, 0])
    expect(g.position()).toStrictEqual([0, 0])

    g.moveTo(10, 10)
    expect(g.pos()).toStrictEqual([10, 10])
    expect(g.position()).toStrictEqual([10, 10])
})

test('headings', () => {
    const g = new Graphic()
    g.setheading(90)
    expect(g.heading()).toBe(90)

    expect(g.pos()).toStrictEqual([0, 0])
    expect(g.towards(10, 0).Direction).toBe(0)
    expect(g.towards(10,10).Direction).toBe(45)
    expect(g.towards(0, 10).Direction).toBe(90)
    expect(g.towards(-10,10).Direction).toBe(135)
    expect(g.towards(-10, 0).Direction).toBe(180)
    expect(g.towards(-10, -10).Direction).toBe(-135)    
    expect(g.towards(0, -10).Direction).toBe(-90)
    expect(g.towards(10, -10).Direction).toBe(-45)
})