import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Avatar, Box, Button } from '@material-ui/core';

import styles from './styles';
import { platforms, assets } from './constants';

const useStyles = makeStyles(styles);

const Filters = ({
  toggleFilter,
  filters,
  platform,
  vaultType,
  asset,
  order,
  setPlatform,
  setVaultType,
  setAsset,
  setOrder,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handlePlatformChange = event => setPlatform(event.target.value);
  const handleVaultTypeChange = event => setVaultType(event.target.value);
  const handleAssetChange = (_event, option) => setAsset(option.value);
  const handleOrderChange = event => setOrder(event.target.value);

  const options = [
    {
      value: 'All',
      label: t('Filters-All'),
    },
    ...assets.map(asset => ({
      value: asset,
      label: asset,
    })),
  ];

  const resetFilter = () => {
    toggleFilter('resetAll');
    setPlatform('All');
    setVaultType('All');
    setAsset('All');
    setOrder('default');
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12}></Grid>

      <Grid item xs={6} sm={4} md={3}>
          <div className={classes.option}>
            <p >Platforms</p>
            <FormControl className={classes.selectorContainer}>
              <Select
                value={platform}
                onChange={handlePlatformChange}
                className={classes.selector}
                id="select-platform"
                labelId="select-platform-label"
              >
                <MenuItem key={'All'} value={'All'}>
                  {t('Filters-All')}
                </MenuItem>
                {platforms.map(platform => (
                  <MenuItem key={platform} value={platform}>
                    {platform}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
      <div class="search_option clearfix">
       
      </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
      <div class="search_option clearfix">
      <div class="option">
            <div className={classes.optionLeft}>
              <p>Staked Only</p>
              <p class="checkbox">
                {/* <input type="checkbox" id="so_check" value="" onChange="alert('1234');toggleFilter('hideDecomissioned')" /> */}
                {/* <label for="so_check"></label> */}
                <FormControl>
                <FormControlLabel
                  className={classes.label}
                  control={
                    <Checkbox
                      checked={filters.hideZeroBalances}
                      id={'so_check'}
                      onChange={() => toggleFilter('hideZeroBalances')}
                      color="primary"
                    />
                  }
                  // TODO: translate labels
                  
                  
                />
                </FormControl>
                <label for="so_check"></label>
              </p>
            </div>

        </div>
        <div class="option">
            <div className={classes.optionRight}>
            <p>Show Inactive</p>
            <p class="checkbox">
            <FormControl>
                <FormControlLabel
                className={classes.label}
                control={
                  <Checkbox
                    checked={!filters.hideDecomissioned}
                    id={'si_check'}
                    onChange={() => toggleFilter('hideDecomissioned')}
                    color="primary"
                  />
                }
              />
            </FormControl>
            <label for="si_check"></label>
            </p>
          </div>
        </div>
      </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
          <div class="search_option clearfix">
							<p className={classes.option}>Sort By</p>
              <FormControl className={classes.selectorContainer }>
                <Select
                  value={order}
                  onChange={handleOrderChange}
                  className={classes.selector}
                  id="select-order"
                  labelId="select-order-label"
                >
                  <MenuItem value={'default'}>{t('Filters-Default')}</MenuItem>
                  <MenuItem value={'apy'}>APY</MenuItem>
                  <MenuItem value={'tvl'}>TVL</MenuItem>
                </Select>
              </FormControl>
						</div>
        {/* <div class="search_option clearfix">
							<p className={classes.option}>Search</p>
							<p>
								<input type="text" class="form-control" placeholder="Search vaults" />
							</p>
						</div> */}
	    </Grid>
     
    </Grid>
  );
};

export default Filters;
