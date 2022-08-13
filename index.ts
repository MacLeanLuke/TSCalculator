import {Calculator} from './src/calculator';
import {question } from 'readline-sync';

export function main(): void
{
    const firstStr: string = question('Enter first number:\n');
    console.log(firstStr);
    
}

main();