import pygame

pygame.init()
#graphic variables
screen = pygame.display.set_mode((700, 700))
pygame.display.set_caption("The queens app")
logo = pygame.image.load('./8-QUEENS-Project/images/logo.png')
queenIcon = pygame.image.load('./8-QUEENS-Project/images/piesa.png')
blackBoard = pygame.image.load('./8-QUEENS-Project/images/black.png')
blackBoard = pygame.image.load('./8-QUEENS-Project/images/white.png')

#graphic elements
def player():
    screen.blit(queenIcon, (350, 100))
pygame.display.set_icon(logo)

#app loop
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    player()




    pygame.display.update()
