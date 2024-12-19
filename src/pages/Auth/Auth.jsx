import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [isRegistering, setIsRegistering] = useState(false)

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const toggleForm = () => setIsRegistering(!isRegistering);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: '#f5f5f5' }}>
            <Grid container spacing={2} sx={{ width: 450, padding: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
                <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: 3 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: 1,
                        }}
                    >
                        <Button
                            variant="text"
                            onClick={toggleForm}
                            sx={{
                                width: '48%',
                                fontSize: '18px',
                                textTransform: 'none',
                                backgroundColor: isRegistering ? 'transparent' : '#1976d2',
                                color: isRegistering ? 'black' : 'white',
                                '&:hover': {
                                    backgroundColor: isRegistering ? 'transparent' : '#1565c0',
                                },
                            }}
                        >
                            Authorization
                        </Button>
                        <Button
                            variant="text"
                            onClick={toggleForm}
                            sx={{
                                width: '48%',
                                fontSize: '18px',
                                textTransform: 'none',
                                backgroundColor: !isRegistering ? 'transparent' : '#1976d2',
                                color: !isRegistering ? 'black' : 'white',
                                '&:hover': {
                                    backgroundColor: !isRegistering ? 'transparent' : '#1565c0',
                                },
                            }}
                        >
                            Registration
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        {isRegistering ? 'Registration' : 'Authorization'}
                    </Typography>

                    <TextField
                        label="Enter the login"
                        variant="outlined"
                        fullWidth
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    {isRegistering && (
                        <TextField
                            label="Enter your E-mail"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ marginTop: 2 }}
                        />
                    )}
                    <TextField
                        label="Enter the password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginTop: 2 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {isRegistering && (
                        <TextField
                            label="Repeat the new password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            sx={{ marginTop: 2 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                        {isRegistering ? 'Register' : 'Log In'}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};
