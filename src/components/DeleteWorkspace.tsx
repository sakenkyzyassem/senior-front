import { Dialog, DialogTitle, Box, DialogContent, DialogContentText, Button, DialogActions } from '@mui/material';
import React from 'react';

interface Props {
    open: boolean;
    handleClose(): void;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submit title");
}

const DeleteWorkspace = ({open, handleClose}: Props) => {
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
                    <DialogTitle sx={{m: "auto" }}> Are you sure? </DialogTitle>
                    <DialogContent>
                        <DialogContentText>Do you really want to delete this workspace? This action cannot be undone</DialogContentText>
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
                            Confirm
                        </Button>
                        
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    )
}

export default DeleteWorkspace
