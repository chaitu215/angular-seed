define( [ 'angular', '../module' ], function( ng ) {
  'use strict';

  ng
  .module( 'cs_accounts.models' )
  .factory( 'AccountModel', function( ResourceFactory ) {
    return new ResourceFactory( '/account', {}, {} );
  });

});
