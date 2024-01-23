import styled from "@emotion/styled";
import {  Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';

const Component=styled(ButtonGroup)`
margin-top:30px;

`
const StyledButton=styled(Button)`
 border-radius:50%;
 margin-right:1px;

`
export default function GroupButton() {
  return (
    <Component>
       <StyledButton>-</StyledButton>
       <Button disabled >1</Button>
       <StyledButton>+</StyledButton>
      
    </Component>
  )
}
