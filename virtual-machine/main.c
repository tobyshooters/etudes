#include <stdio.h>
#include <stdbool.h>

typedef enum {
    PSH,
    ADD,
    POP,
    SET,
    HLT
} InstructionSet;

typedef enum {
    A, B, C, D, E, F, IP, SP,
    NUM_OF_REGISTERS,
} Registers;

#define ip (registers[IP])
#define sp (registers[SP])

int registers[NUM_OF_REGISTERS];

bool running = true;
const int program[] = {
    PSH, 5,
    PSH, 6,
    ADD,
    POP,
    HLT
};
int stack[256];

int 
main() 
{
    while (running)
    {
        int instruction = program[ip];
        switch (instruction)
        {
            case PSH: 
            {
                stack[++sp] = program[++ip];
                break;
            }

            case POP:
            {
                printf("Popped: %d\n", stack[sp--]);
                break;
            }

            case ADD:
            {
                int a = stack[sp--];
                int b = stack[sp--];
                stack[++sp] = b + a;
                break;
            }

            case SET:
            {
                int reg = program[++ip];
                int val = program[++ip];
                registers[reg] = val;
                break;
            }

            case HLT:
            {
                running = false;
                break;
            }
        }
        ip++;
    }

    printf("Virtual machine exiting.\n");
    return 0;
}
