import React from 'react'
import { Modal, Button, Header,Image, Container } from 'semantic-ui-react'
import { MainPage } from './MainPage'

export const Score = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <MainPage>
 <Container>
     <div>
         
     </div>
     <h4>Congratulations Jane Doe, Please  click the button below to view your score</h4>
             <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
       
        trigger={<Button>Show Scores</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='./assets/newtisa1.jpg' wrapped />
          <Modal.Description>
            <Header>Result</Header>
            <p>
              Congratulation You had 35 marks
            </p>
            
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
        </Container>
        </MainPage>
       
       
    )
}
