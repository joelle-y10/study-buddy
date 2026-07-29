import type { CodeChallenge } from '../../types'

/**
 * Code Lab challenges for Computer Science 10, keyed by unit id.
 * Concept tags must match the unit's concept list so results feed the
 * adaptive engine. No input() — pass values via variables in the starter.
 */
export const cs10Challenges: Record<string, CodeChallenge[]> = {
  'programming-basics': [
    {
      id: 'cs10-pb-c1',
      concept: 'variables-types',
      difficulty: 1,
      title: 'Hello, StudyBuddy',
      task: 'Write a program that prints exactly:  Hello, StudyBuddy!',
      starter: '# Type your code below, then hit Run\n',
      expectedOutput: 'Hello, StudyBuddy!',
      solution: 'print("Hello, StudyBuddy!")',
      hint: 'print("...") sends text to the screen. Match the capitalization and punctuation exactly.',
    },
    {
      id: 'cs10-pb-c2',
      concept: 'variables-types',
      difficulty: 1,
      title: 'Greeting with a variable',
      task: 'The variable name is already set. Print a greeting in the form:  Hello, Alex!  — but build it using the variable, not by typing Alex yourself.',
      starter: 'name = "Alex"\n# print the greeting using the variable\n',
      expectedOutput: 'Hello, Alex!',
      solution: 'name = "Alex"\nprint("Hello, " + name + "!")',
      hint: 'You can glue strings together with + , or use an f-string: f"Hello, {name}!"',
    },
    {
      id: 'cs10-pb-c3',
      concept: 'conditionals',
      difficulty: 2,
      title: 'Odd or even?',
      task: 'The variable n is set to a number. Print "even" if it is even and "odd" if it is odd. (It should work for ANY n, not just this one.)',
      starter: 'n = 7\n# your if/else here\n',
      expectedOutput: 'odd',
      solution: 'n = 7\nif n % 2 == 0:\n    print("even")\nelse:\n    print("odd")',
      hint: 'The remainder operator % tells you what is left after dividing: n % 2 is 0 for even numbers.',
    },
    {
      id: 'cs10-pb-c4',
      concept: 'loops',
      difficulty: 2,
      title: 'Count to five',
      task: 'Use a loop to print the numbers 1 through 5, one per line. No fair typing five print statements!',
      starter: '# use a for loop with range()\n',
      expectedOutput: '1\n2\n3\n4\n5',
      solution: 'for i in range(1, 6):\n    print(i)',
      hint: 'range(1, 6) produces 1, 2, 3, 4, 5 — the end value is not included.',
    },
    {
      id: 'cs10-pb-c5',
      concept: 'loops',
      difficulty: 3,
      title: 'Sum of the first 10 numbers',
      task: 'Use a loop to add up the numbers 1 to 10 and print the total.',
      starter: 'total = 0\n# loop, then print the total once at the end\n',
      expectedOutput: '55',
      solution: 'total = 0\nfor i in range(1, 11):\n    total = total + i\nprint(total)',
      hint: 'Keep a running total: total = total + i inside the loop. Print AFTER the loop ends (unindented).',
    },
  ],
}
