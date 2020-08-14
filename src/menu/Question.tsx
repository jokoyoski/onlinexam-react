import React from 'react'
import { Grid ,Image, Form, Checkbox, Pagination} from 'semantic-ui-react'
import { MainPage } from './MainPage'

export const Question = () => {
 
    return (
<MainPage>
<div style={{display:'flex'}}>
<div style={{flex:4}} >
<h4>What is the capital of Lagos ?</h4>
</div>
<div style={{flex:3,marginLeft:'1em'}}>
<Form>
        <Form.Field>
          Selected value: <b>{}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Choose this'
            name='checkboxRadioGroup'
            value='this'
            
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Or that'
            name='checkboxRadioGroup'
            value='that'
            
          />
        </Form.Field>
      </Form>
      <div style={{margin:'auto'}}>
      <Pagination defaultActivePage={5} totalPages={10} />
      </div>

      

</div>
</div>    
               
 </MainPage>
        
    )
}
