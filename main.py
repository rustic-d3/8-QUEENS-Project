import pygame

pygame.init()
#graphic variables
screen = pygame.display.set_mode((700, 700))
pygame.display.set_caption("The queens app")
logo = pygame.image.load('./8-QUEENS-Project/images/logo.png')
queenIcon = pygame.image.load('./8-QUEENS-Project/images/piesa.png')
blackBoard = pygame.image.load('./8-QUEENS-Project/images/black.png')
whiteBoard = pygame.image.load('./8-QUEENS-Project/images/white.png')
#chess table
chessTable = [['w','b','w','b','w','b','w','b'],
              ['b','w','b','w','b','w','b','w'],
              ['w','b','w','b','w','b','w','b'],
              ['b','w','b','w','b','w','b','w'],
              ['w','b','w','b','w','b','w','b'],
              ['b','w','b','w','b','w','b','w'],
              ['w','b','w','b','w','b','w','b'],
              ['b','w','b','w','b','w','b','w']]
initCoordinatesX = 0
initCoordinatesY = 0
countRow = 0


#graphic elements
def player():
    screen.blit(queenIcon, (350, 100))

def board(piece, x, y):
    if piece == 'w':
        screen.blit(whiteBoard, (x, y))
    if piece == 'b':
        screen.blit(blackBoard, (x, y))


pygame.display.set_icon(logo)

#app loop
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    player()

#chess board placement

    for i in chessTable:
        for j in  i:
            if j == 'b':
                board(j, initCoordinatesX, initCoordinatesY)
                if initCoordinatesX < 700:
                    initCoordinatesX+=87.5
                if initCoordinatesX == 700:
                    initCoordinatesX = 0
                    initCoordinatesY+=87.5
            if j == 'w':
                board(j, initCoordinatesX, initCoordinatesY)
                if initCoordinatesX < 700:
                    initCoordinatesX+=87.5
                if initCoordinatesX == 700:
                    initCoordinatesX = 0
                    initCoordinatesY+=87.5

            





    pygame.display.update()
