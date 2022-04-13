import { rejects } from 'assert';

/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise<number>((resolve) => {
        setTimeout(() => resolve(ms), ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];
    for (let i of [100, 200, 300]) {
        mock(i).then((data) => result.push(data));
    }
    return new Promise((resolve) => resolve(result));
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    return Promise.reject(new Error('my error')).catch((err) => err.message);
}
