import pygame

pygame.init()
#graphic variables
screen = pygame.display.set_mode((700, 700))
pygame.display.set_caption("The queens app")
logo = pygame.image.load('./images/logo.png')
queenIcon = pygame.image.load('./images/piesa.png')
blackBoard = pygame.image.load('./images/black.png')
whiteBoard = pygame.image.load('./images/white.png')
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

def placeboard(x, y, chess):
    for i in chess:
        for j in  i:
            if j == 'b':
                board(j, x, y)
                if x < 700:
                    x+=87.5
                if x == 700:
                    x = 0
                    y+=87.5
            if j == 'w':
                board(j, x, y)
                if x < 700:
                    x+=87.5
                if x == 700:
                    x = 0
                    y+=87.5



pygame.display.set_icon(logo)

#app loop
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
#chess board placement
    placeboard(initCoordinatesX, initCoordinatesY, chessTable)            
    
    pygame.display.update()
