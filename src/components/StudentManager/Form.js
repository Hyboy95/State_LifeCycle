import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


export default function Form({form, click, change, message, checkValid}) {
    return (
        <>  
            <h2 style={{textAlign:'center', margin:'30px 0'}}>Quản Lý Sinh Viên</h2>
            <div style={{textAlign:'center', marginBottom:50}}>
                <Card sx={{ maxWidth: 500, margin:"auto", paddingBottom:2}}>
                    <CardContent>
                        <p style={{fontSize:24}}><b>Danh Sách Sinh Viên</b></p>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '40ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="name"
                                    name='name'
                                    label="Name"
                                    variant="outlined"
                                    value={form.name}
                                    onChange={change}
                                />
                                <TextField
                                    id="phone"
                                    name='phone'
                                    label="Phone"
                                    variant="outlined"
                                    value={form.phone}
                                    onChange={change}
                                />
                                <p style={{color: 'red'}}>{message.phone}</p>
                                <TextField
                                    id="email"
                                    name='email'
                                    label="Email"
                                    variant="outlined"
                                    value={form.email}
                                    onChange={change}
                                />
                                <p style={{color: 'red'}}>{message.email}</p>
                            </div>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button size='large' style={{margin:'auto'}} variant='contained'onClick={click} disabled={checkValid}>Thêm/Sửa</Button>
                    </CardActions>
                </Card>
            </div>

        </>
    );
}