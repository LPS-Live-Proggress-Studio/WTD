// @ts-nocheck
import { Link } from 'react-router-dom';
import { CheckBoxToggler } from '@/Components';
import { Locales } from '@/Utils/Constants/variables';
import { useTranslation } from 'react-i18next';
import './settingsPage.scss';
import { Paths } from '@/App/Routing';

const Settings = () => {
  const { t, i18n } = useTranslation();

  const logout = () => {
    console.log('Logged out!');
  };

  return (
    <>
      <div className='settings'>
        <div className='settings__title'>
          <h1>{t('settings.settings')}</h1>
        </div>
        <div className='settings__section'>
          <div className='setion__item'>
            <div className='item__title'>
              <h2>{t('settings.theme')}</h2>
              <div className='togglers-box'>
                <CheckBoxToggler />
              </div>
            </div>
          </div>
          <div className='setion__item'>
            <div className='item__title'>
              <h2>{t('settings.language')}</h2>
              <div className='togglers-box'>
                {Object.keys(Locales).map((locale) => (
                  <div key={locale}>
                    <button
                      style={{
                        fontWeight:
                          i18n.resolvedLanguage === locale ? 'bold' : 'normal',
                      }}
                      type='submit'
                      onClick={() => i18n.changeLanguage(locale)}
                    >
                      {Locales[locale].title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="setion__item">
                <div className="item__title">
                  <h2>Сочитания клавишь</h2>
                  <div className="item-box">
                    <div className="p-20">
                      <Link to={Paths.KBMap}>Keyboard Map</Link>
                    </div>
                  </div>
                </div>
              </div> */}
          <div className='setion__item'>
            <div className='item__title'>
              <h2>{t('settings.account')}</h2>
              <div className='item-box'>
                <div className='p-20'>
                  <Link to={Paths.Account}>{t('settings.accountsettings')}</Link>
                </div>
                <button type='button' className='button btn' onClick={logout}>
                  {t('settings.logout')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
