import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Link as ExternalLink } from 'theme-ui';
import Logo from '../../assets/logo.png';
import {
  IoMail,
  IoLocationSharp,
  IoLogoApple,
  IoLogoGooglePlaystore,
} from 'react-icons/io5';

import {
  GrFacebook,
  GrInstagram,
  GrGatsbyjs,
  GrTwitter,
  GrReactjs,
  GrNode,
} from 'react-icons/gr';
// import MailChimpForm from '../Forms/MailChimpForm'

export default function Footer() {
  return (
    <>
      <Box sx={styles.container} as='div'>
        <Box sx={{ ...styles.footerSection, ...styles.logoSection }}>
          <Image sx={styles.logo} src={Logo} />
          <Text as='h3' sx={styles.companyName}>
            Build A Farm
          </Text>
        </Box>

        <Box sx={{ ...styles.footerSection, ...styles.linksSection }}>
          <Text as='h4' sx={{ ...styles.footerHeading }}>
            Explore
          </Text>
          <Link to='/our-app'>Our App</Link>
          <Link to='/plants'>Search Plants</Link>
          <Link to='/farm-builder'>Farm Builder</Link>
          <Link to='/advice'>Our Advice</Link>
          <Link to='/contact'>Contact Us</Link>
        </Box>

        <Box sx={styles.footerSection}>
          <Text as='h4' sx={{ ...styles.footerHeading }}>
            Contact
          </Text>

          <Text as='p' sx={styles.contactText}>
            <IoLocationSharp /> St George, UT, United States
          </Text>
          <Text as='p' sx={styles.contactText}>
            <IoMail /> admin@buildafarm.com
          </Text>

          <Text as='p' sx={styles.contactText}>
            <IoLogoGooglePlaystore /> <IoLogoApple /> App Avaliable On
          </Text>
        </Box>

        <Box sx={{ ...styles.footerSection, ...styles.linksSection }}>
          <Text as='h4' sx={{ ...styles.footerHeading }}>
            Operations
          </Text>
          <Link to='/work-with-us'>Work With Us</Link>
          <Link to='/terms-and-conditions'>Terms and Conditions</Link>
          <Link to='/private-policy'>Private Policy</Link>
          <Link to='/accessibility'>Accessibility</Link>
          <Link to='/credits'>Credits</Link>
          <Link to='/make-suggestions'>Send Feedback</Link>
          <Link to='/make-suggestions'>Make Suggestions</Link>
        </Box>

        <Box sx={{ ...styles.footerSection, ...styles.iconSection }}>
          <Text
            as='h4'
            sx={{ ...styles.footerHeading, ...styles.contactHeading }}
          >
            Social
          </Text>
          <Box sx={styles.socialIconsContainer}>
            <ExternalLink href='https://www.facebook.com' target='_blank'>
              <GrFacebook />
            </ExternalLink>
            <ExternalLink href='https://www.instagram.com' target='_blank'>
              <GrInstagram />
            </ExternalLink>
            <ExternalLink href='https://www.twitter.com' target='_blank'>
              <GrTwitter />
            </ExternalLink>
          </Box>
        </Box>

        <Box sx={{ ...styles.footerSection, ...styles.signUpSection }}>
          <Text as='h4' sx={{ ...styles.footerHeading }}>
            Sign Up
          </Text>
          {/* <MailChimpForm /> */}
        </Box>
      </Box>

      <Box sx={styles.footerBottomBar}>
        <Text as='p' style={styles.copyright}>
          © Build A Farm {new Date().getFullYear()}
        </Text>
        <Box sx={styles.bottomLinks}>
          <Text as='p' sx={styles.bottomLink}>
            <Link to='/terms-and-conditions'>Terms & Conditions</Link>
          </Text>
          <Text as='p' sx={styles.bottomLink}>
            |
          </Text>
          <Text as='p' sx={styles.bottomLink}>
            <Link to='/private-policy'>Private Policy</Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
const styles = {
  // ? === containers ===

  container: {
    backgroundColor: 'dark',
    borderTop: '1px solid white',
    padding: ['2rem 1.25rem', '3rem 1.25rem'],
    color: 'lightGrey',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: ['', '', '', 'flex-end'],
  },

  footerSection: {
    width: [
      '100%',
      'calc(50% - 1rem)',
      'calc(33.3% - 2rem)',
      'calc(25% - 2rem)',
    ],
    margin: ['', '0.5rem', '1rem'],
    display: 'flex',
    flexDirection: 'column',
  },

  // ? === Text Containers ===

  footerHeading: {
    borderBottom: '1px solid',
    borderColor: 'primaryDark',
    fontWeight: 'bold',
    padding: '0.5rem 0.5rem 0.5rem 0rem',
    margin: '0.75rem 0rem',
    color: 'primary',
    width: ['', 'fit-content'],
  },

  contactText: {
    variant: 'customStyles.iconText',
    margin: '0.25rem 0rem',
  },

  // ? === Links Containers ===

  linksSection: {
    a: {
      variant: 'buttons.textOnly',
      fontSize: '0.8rem',
      margin: '0.25rem 0rem',
    },
  },

  // ? === Logo Container ===

  logoSection: {
    textAlign: 'center',
  },
  logo: {
    maxWidth: '150px',
    width: '100%',
    margin: '0 auto',
  },
  companyName: {
    maxWidth: '150px',
    width: '100%',
    textAlign: 'center',
    margin: '1rem auto 0rem',
  },

  // ? === Icons Container ===

  iconSection: {},
  socialIconsContainer: {
    fontSize: '1.25rem',
    svg: {
      marginRight: '0.5rem',
      color: 'white',
    },
  },
  techIconsContainer: {
    fontSize: '1.25rem',
    svg: {
      marginRight: '0.5rem',
      color: 'white',
    },
  },

  // ? === SignUp Container ===

  signUpSection: {
    maxWidth: ['', 'calc(50% - 2rem)'],
    flexGrow: '1',
    // margin: ['', '0.5rem', '1rem', '1rem 1rem 0rem auto'],
  },

  // ? === Bottom Bar ===

  footerBottomBar: {
    backgroundColor: 'black',
    padding: '1.25rem',
    flexDirection: ['', '', 'row'],
    display: ['', '', 'flex'],
    fontSize: '0.8rem',
  },
  copyright: {
    margin: '0 auto 0 0',
    color: 'white',
  },
  bottomLinks: { display: 'flex' },
  bottomLink: {
    margin: ['0.5rem 0rem 0rem', '', '0rem 0.5rem'],
    padding: '0rem 1rem 0rem 0rem',
    a: {
      color: 'lightGrey',
    },
  },
};
