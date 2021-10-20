import { Dialog, DialogContent, DialogTitle, Box, TextField, DialogContentText, Button, DialogActions } from '@mui/material';
import React from 'react';

interface Props {
    open: boolean;
    handleClose(): void;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submit descr");
}

const EditDescr = ({open, handleClose}: Props) => {
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <Box component="form" 
                    onSubmit={handleSubmit}
                    sx = {{
                        m: "auto",
                        width: 500,
                    }}
                >
                    <DialogTitle sx={{m: "auto" }}> Edit workspace description </DialogTitle>
                    <DialogContent>
                        <DialogContentText>Make changes to the description of a workspace</DialogContentText>
                        <TextField 
                            required
                            multiline
                            name="descr"
                            id="descr"
                            placeholder="Description"
                            sx = {{
                                mt: 1,
                                mb: 1,
                                width: "100%",
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        < Button
                            sx={{ width: '30%', borderRadius: '7px'}}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: '30%', borderRadius: '7px'}}
                        >
                            Submit
                        </Button>
                        
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    )
}

export default EditDescr
