import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { adminMenuPages, generalPages, userMenuPages } from './MenuItems';
import Authorize from '../../auth/Authorize';
import { AuthContext } from '../../auth/AuthContextProvider';
import AlertContainer from '../../alerts/AlertContainer';

function AppToolbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElAdmin, setAnchorElAdmin] = React.useState<null | HTMLElement>(null);

  const authContext = React.useContext(AuthContext);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenAdminMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAdmin(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseAdminMenu = () => {
    setAnchorElAdmin(null);
  };

  // Get the current location
  const location = useLocation();

  return (
    <AppBar id="main-menu" position="relative" enableColorOnDark sx={{ zIndex: 100, top: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Link to="/">
              <img
                src="/logo.svg"
                alt=""
                style={{
                  position: 'absolute',
                  left: '-4.5rem',
                  top: '50%',
                  height: '12rem',
                  width: 'auto',
                  transform: 'translate(0, -50%)',
                }}
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {generalPages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.target}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              <Authorize roles={['Admin']}>
                <MenuItem
                  onClick={handleOpenAdminMenu}
                >
                  <Typography textAlign="center">Admin</Typography>
                </MenuItem>
              </Authorize>
            </Menu>
          </Box>
          <Box sx={{
            display: { xs: 'flex', md: 'none' },
            position: 'relative',
            height: '4rem',
            width: '100%',
          }}
          >
            <Link to="/">
              <img
                src="/logo.svg"
                alt="Logo of CreativIT"
                style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                }}
              />
            </Link>
          </Box>
          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: '1rem',
          }}
          >
            {generalPages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  display: 'block',
                  marginY: '13.75px',
                  position: 'relative',
                  '&::after': location.pathname === page.target ? {
                    content: '""',
                    position: 'absolute',
                    zIndex: '0',
                    bottom: '0',
                    left: '5px',
                    width: '100%',
                    height: '1rem',
                    backgroundImage: 'url("/lines/menuLine.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  } : {},
                }}
                component={Link}
                to={page.target}
              >
                {page.name}
              </Button>
            ))}
            <Authorize roles={['Admin']}>
              <Button
                sx={{
                  color: 'white', display: 'block', marginY: '13.75px',
                }}
                onClick={handleOpenAdminMenu}
              >
                Admin
              </Button>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-admin-appbar"
                anchorEl={anchorElAdmin}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElAdmin)}
                onClose={handleCloseAdminMenu}
              >
                {adminMenuPages.map((page) => (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={page.target}
                    onClick={() => {
                      handleCloseAdminMenu();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Authorize>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenuPages
                .filter((m) => (m.disabled === undefined || !m.disabled(authContext)))
                .map((page) => (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={page.target}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
        <AlertContainer />
      </Container>
    </AppBar>
  );
}
export default AppToolbar;
