import React, { useEffect, useRef, useState } from 'react';
import { renderIcon } from '@download/blockies';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { WbSunny, NightsStay } from '@material-ui/icons';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';
import { useTranslation } from 'react-i18next';

import styles from './styles';

const useStyles = makeStyles(styles);

const HeaderLinks = ({
  connected,
  address,
  connectWallet,
  disconnectWallet,
  isNightMode,
  setNightMode,
}) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [lng, setLanguage] = useState('en');
  const [shortAddress, setShortAddress] = useState('');
  const [dataUrl, setDataUrl] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const cachedLanguage = i18n.language;
    if (!cachedLanguage) {
      return;
    }

    const languageCode = cachedLanguage.split('-')[0].toLowerCase();
    setLanguage(languageCode);
  }, [i18n.language]);

  useEffect(() => {
    if (!connected) {
      return;
    }

    const canvas = canvasRef.current;
    renderIcon({ seed: address.toLowerCase() }, canvas);
    const updatedDataUrl = canvas.toDataURL();
    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl);
    }
    if (address.length < 11) {
      setShortAddress(address);
    } else {
      setShortAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
    }
  }, [dataUrl, address, connected]);

  const handleClick = event => {
    switch (event) {
      case 'Deutsch':
        return i18n.changeLanguage('de').then(() => setLanguage(event));
      case 'Ελληνικά':
        return i18n.changeLanguage('el').then(() => setLanguage(event));
      case 'English':
        return i18n.changeLanguage('en').then(() => setLanguage(event));
      case 'Español':
        return i18n.changeLanguage('es').then(() => setLanguage(event));
      case 'Français':
        return i18n.changeLanguage('fr').then(() => setLanguage(event));
      case 'हिन्दी':
        return i18n.changeLanguage('hi').then(() => setLanguage(event));
      case 'Bahasa Indonesia':
        return i18n.changeLanguage('id').then(() => setLanguage(event));
      case 'Italiano':
        return i18n.changeLanguage('it').then(() => setLanguage(event));
      case '한글':
        return i18n.changeLanguage('ko').then(() => setLanguage(event));
      case 'Nederlands':
        return i18n.changeLanguage('nl').then(() => setLanguage(event));
      case 'Português':
        return i18n.changeLanguage('pt').then(() => setLanguage(event));
      case 'Pусский':
        return i18n.changeLanguage('ru').then(() => setLanguage(event));
      case 'Svenska':
        return i18n.changeLanguage('se').then(() => setLanguage(event));
      case 'Türkçe':
        return i18n.changeLanguage('tr').then(() => setLanguage(event));
      case '中文':
        return i18n.changeLanguage('zh').then(() => setLanguage(event));
      case 'Українська':
        return i18n.changeLanguage('uk').then(() => setLanguage(event));
      // TODO: more translations
      default:
        return;
    }
  };

  return (
    
    <List className={classes.list + ' ' + classes.mlAuto}>
      {/* <Hidden smDown>
        <ListItem className={classes.listItem}>
          <IconButton onClick={setNightMode} className={classes.iconButton}>
            {isNightMode ? <WbSunny /> : <NightsStay />}
          </IconButton>
        </ListItem>
      </Hidden> */}
      <ListItem className={classes.listItem}>
        <Button
          disableElevation
          className={classes.walletDisplay}
          onClick={connected ? disconnectWallet : connectWallet}
        >
          {connected ? (
            <>
              <canvas ref={canvasRef} style={{ display: 'none' }} />
              <Avatar
                alt="address"
                src={dataUrl}
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '4px',
                }}
              />
              {shortAddress}
            </>
          ) : (
            <>
              <p class="btn btn-white-o">Connect Wallet</p>
            </>
          )}
        </Button>
      </ListItem>
      <ListItem className={classes.listItemsmall}>
        <a href="#."><img src="img/icon/ic_gitbook.png" alt="gitbook" width="40px"/></a>
        <a href="#."><img src="img/icon/ic_telegram.png" alt="telegram" width="40px"/></a>
        <a href="#."><img src="img/icon/ic_twitter.png" alt="twitter" width="40px"/></a>
        <a href="#."><img src="img/icon/ic_github.png" alt="github" width="40px"/></a>
      </ListItem>
      <Hidden smUp>
      <div className={classes.listItemBtn}>
        {renderLink('SPRING', 'SPRING', 'SPRING', classes)}<br/>
        {renderLink('GARDEN', 'GARDEN', 'GARDEN', classes)}<br/>
        {renderLink('AUDIT', t('AUDIT'), 'AUDIT', classes)}
      </div>
      </Hidden> 
  </List>
  );
};
const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};
export default HeaderLinks;
