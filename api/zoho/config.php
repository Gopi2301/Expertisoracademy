<?php
/**
 * Zoho Integration Configuration
 * Stores Zoho Forms and CRM API credentials
 */

// Zoho Forms Configuration
define('ZOHO_FORMS_ENDPOINT', 'https://forms.zohopublic.in/expertisoracademy/form/demo2/formperma/ZIJ0tdUgCx77bWFaqOiUKXOsgzGWxRZyrwo9VWpUY-g/htmlRecords/submit');

// Zoho CRM Configuration (disabled for now - can be enabled later with credentials)
define('ZOHO_CRM_ENABLED', false);
define('ZOHO_CRM_ENDPOINT', ''); // To be filled when CRM integration is needed
define('ZOHO_CRM_ACCESS_TOKEN', ''); // To be filled
define('ZOHO_CRM_REFRESH_TOKEN', ''); // To be filled

// Field Mapping Configuration
define('ZOHO_LEAD_SOURCE', 'Website Form');
define('ZOHO_DEFAULT_COUNTRY', 'India');

// Logging Configuration
define('ZOHO_DEBUG_MODE', true); // Set to false in production for less verbose logging
