#Hangman by Cristobal Sciutto

def hangman(word):
    n = len(word)
    l = []
    lives = 5
    current = "_ "*n

    while lives >= 0 and "_" in current:
        print('')
        print("This is your current state: ")
        print(current)
        print('')
        print("You have already guessed: ")
        print(l)
        print('')
        print("You have %d lives left" %lives)
        print('')

        check = input("Would you like to guess the word? [Yes or No]: ")
        
        if check == "Yes" or check == "Y" or check == "y" or check == "yes":
            guess = input("Please type your guess: ")
            if guess == word:
                print("You have won! %s was the word!" %word)
                break
            else:
                print("Unfortunately, %s is not right" %guess)
                l.append(guess)
                lives -= 1
        else:
            print('')
            print("Ok then.")
            letter = input("What letter do you guess: ")
            if letter in word:
                print('')
                print("Great, that letter is in the word!")
                l.append(letter)
                current = updateCurrent(letter, word, current)
            else:
                print('')
                print("Unfortunately, that letter is not in the word")
                l.append(letter)
                lives -= 1

        print('')
        print("----------------------------------")

    print("GAME OVER")

def updateCurrent(letter, word, current):
    temp = []
    temp2 = current.split()
    ind = []

    for i in word:
        temp.append(i)
    for i in temp:
        if i == letter:
            ind.append(temp.index(i))
            temp[temp.index(i)] = "0"
    for i in ind:
        temp2[i] = letter

    return ' '.join(temp2)

hangman("stanford")
