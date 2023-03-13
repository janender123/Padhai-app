// ** React Imports
import { useState, forwardRef } from 'react'

import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'

// ** MUI Imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import CardSnippet from 'src/@core/components/card-snippet'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'




const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const SendCourseNoticeDialog = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [languages, setLanguages] = useState('')

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setLanguages(typeof value === 'string' ? value.split(',') : value)
  }
  const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }))
  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/1.png')
  }

  const [checked, setChecked] = useState('wifi')

  return (
    <Card >
      <Button variant='contained' onClick={() => setShow(true)}>
        Send a notice
      </Button>

      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
      >
        <DialogContent sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
              Add details of the Notice
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item sm={12} xs={12}>
              <TextField fullWidth label='Title' />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Course</InputLabel>
                <Select
                  // value={category}
                  label='Course'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                  // onChange={e => setCategory(e.target.value)}
                  placeholder='select a course'
                >

                  <MenuItem value={10}>PCM Class 12th</MenuItem>
                  <MenuItem value={20}>Physics Class 11th</MenuItem>
                  <MenuItem value={30}>Science Class 8th</MenuItem>
                  <MenuItem value={30}>Maths Class 6th</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <EditorWrapper>
                <CardSnippet
                  sx={{ overflow: 'visible' }}
                  title='Message'
                  code={{
                    tsx: null,
                    jsx: source.EditorControlledJSXCode
                  }}
                >
                  <EditorControlled />
                </CardSnippet>
              </EditorWrapper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => setShow(false)}>
            Submit
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => setShow(false)}>
            Discard
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default SendCourseNoticeDialog
