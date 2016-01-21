
define([ "jquery" ], function( $ ) {

	"use strict";

    function __extend( Child, Parent ) {
        function F(){}
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    }

    function __copy( d, b ) {
        for (var p in d) if (d.hasOwnProperty(p)) if ( d[p] ) b.constructor.prototype[p] = d[p];
    }

	__extend( SimpError, Error );

	function SimpError( method_name, message, data ) {

		var err = Error.call( this, arguments[1] );

		this.method_name = method_name;
		this.message     = message;
		this.data        = data;
		this.stack       = err.stack;

		console.group( "===== SimpTabError. ====="             );
		console.error( "this.method_name = ", this.method_name );
		console.error( "this.message     = ", this.message     );
		console.error( "this.data        = ", this.data        );
		console.error( "this.stack       = ", this.stack       );
		console.groupEnd();
	}

    SimpError.prototype.name = "SimpError";

    SimpError.Clone = function( simperr, error ) {
        __copy( simperr, error );
        return error;
    };

	return SimpError;

});
