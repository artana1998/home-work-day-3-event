import User from './user.js';
import MyEmitter from './myEmitter.js';

const greetingEmitter = new MyEmitter();

greetingEmitter.on('userRegister', (user) => {
    console.log(`welcome,${user.name} thank you for registration`);
});

greetingEmitter.on('userLogin', (user) => {
    console.log(`Hello again, ${user.name}! You've logged in.`);
});

greetingEmitter.on('userLogout', (user) => {
    console.log(`Goodbye, ${user.name}! You've logged out.`);
});

const user1 = new User(1, 'artan', 'artan12@gmail.com');

greetingEmitter.emit('userRegister', user1);
greetingEmitter.emit('userLogin', user1);
greetingEmitter.emit('userLogout', user1);


