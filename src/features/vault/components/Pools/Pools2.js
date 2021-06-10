import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TVLLoader from './TVLLoader/TVLLoader';
import NetworksToggle from 'components/NetworksToggle/NetworksToggle';
import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchBalances, useFetchVaultsData, useFetchApys } from '../../redux/hooks';
import VisiblePools from '../VisiblePools/VisiblePools';
import styles from './styles';
import { usePoolsTvl, useUserTvl } from '../../hooks/usePoolsTvl';
import { formatGlobalTvl } from 'features/helpers/format';


const FETCH_INTERVAL_MS = 15 * 1000;

const useStyles = makeStyles(styles);

export default function Pools2() {
  const { t } = useTranslation();
  const { web3, address } = useConnectWallet();
  const { pools, fetchVaultsData, fetchVaultsDataPending, fetchVaultsDataDone } = useFetchVaultsData();
  const { tokens, fetchBalances, fetchBalancesPending, fetchBalancesDone } = useFetchBalances();
  const { apys, fetchApys, fetchApysDone } = useFetchApys();
  const { poolsTvl } = usePoolsTvl(pools);
  const { userTvl } = useUserTvl(pools, tokens);
  const classes = useStyles();


  useEffect(() => {
    fetchApys();
    const id = setInterval(fetchApys, FETCH_INTERVAL_MS);
    return () => clearInterval(id);
  }, [fetchApys]);

  useEffect(() => {
    const fetch = () => {
      if (address && web3 && !fetchBalancesPending) {
        fetchBalances({ address, web3, tokens });
      }
      if (!fetchVaultsDataPending) {
        fetchVaultsData({ web3, pools });
      }
    };
    fetch();

    const id = setInterval(fetch, FETCH_INTERVAL_MS);
    return () => clearInterval(id);

    // Adding tokens and pools to this dep list, causes an endless loop, DDoSing the api
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, web3, fetchBalances, fetchVaultsData]);
  
  return (
    <Grid container className={classes.container}  justify="center">
      <Grid item xs={10}>
      <section id="status_plate">
      <div class="container">
        <div class="top_status">
          <div class="row">
            <div class=" col-md-3">
              <p>
                <small>SPRING Price</small>
                $123,456,789
               
              </p>
              <p>
                <small>SPRING Market Cap</small>
                $123,456,789
              </p>
            </div>
            <div class=" text-center col-md-6 mt40-xs mb40-xs">
              <p>Total Value Locked (TVL)</p>
              <p>
                {fetchVaultsDataDone && poolsTvl > 0 ? (
                  formatGlobalTvl(poolsTvl)
                ) : (
                  <TVLLoader className={classes.titleLoader} />
                )}


              </p>
              <p><a href="#." class="btn btn-green">Buy SPRING</a></p>
            </div>
            <div class=" col-md-3">
              <p>
                <small>Your Deposit</small>
                $123,456,789
              </p>
              <p>
                <small>SPRING to harvest</small>
                $123,456,789
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    
        {/* <div className={classes.tvl}>
          <span className={classes.title}>
            TVL{' '}
            {fetchVaultsDataDone && poolsTvl > 0 ? (
              formatGlobalTvl(poolsTvl)
            ) : (
              <TVLLoader className={classes.titleLoader} />
            )}
          </span>

          <span className={classes.text}>
            {t('Vault-Deposited')}{' '}
            {fetchVaultsDataDone && fetchBalancesDone ? (
              formatGlobalTvl(userTvl)
            ) : (
              <TVLLoader className={classes.titleLoader} />
            )}
          </span>
          <h3 className={classes.subtitle} style={{ marginTop: '24px' }}>
            {t('Vault-WithdrawFee')}
          </h3>
        </div> */}
      </Grid>

      <Grid item xs={6}>
        <div class="title_tab_menu clearfix">
          <a href="/" >
            <p>
              <span>sVaults</span>
            </p>
          </a>
          <a href="/index2" class="on">
            <p>
              <span>sFarms</span>
            </p>
          </a>
        </div>
      </Grid>      

      {/* <Grid item xs={6}>
        <h1 className={classes.title}>{t('Vault-Network')}</h1>
        <NetworksToggle />
      </Grid>       */}
      

      <VisiblePools
        pools={pools}
        apys={apys}
        tokens={tokens}
        fetchBalancesDone={fetchBalancesDone}
        fetchApysDone={fetchApysDone}
        fetchVaultsDataDone={fetchVaultsDataDone}
      />
    </Grid>





  );
}