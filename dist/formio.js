/*! ng-formio v2.19.6 | https://unpkg.com/ng-formio@2.19.6/LICENSE.txt */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.formio = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

module.exports = _dereq_('./build/utils');

},{"./build/utils":undefined}],2:[function(_dereq_,module,exports){
var getNative = _dereq_('./_getNative'),
    root = _dereq_('./_root');

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

},{"./_getNative":85,"./_root":128}],3:[function(_dereq_,module,exports){
var hashClear = _dereq_('./_hashClear'),
    hashDelete = _dereq_('./_hashDelete'),
    hashGet = _dereq_('./_hashGet'),
    hashHas = _dereq_('./_hashHas'),
    hashSet = _dereq_('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

},{"./_hashClear":93,"./_hashDelete":94,"./_hashGet":95,"./_hashHas":96,"./_hashSet":97}],4:[function(_dereq_,module,exports){
var listCacheClear = _dereq_('./_listCacheClear'),
    listCacheDelete = _dereq_('./_listCacheDelete'),
    listCacheGet = _dereq_('./_listCacheGet'),
    listCacheHas = _dereq_('./_listCacheHas'),
    listCacheSet = _dereq_('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

},{"./_listCacheClear":108,"./_listCacheDelete":109,"./_listCacheGet":110,"./_listCacheHas":111,"./_listCacheSet":112}],5:[function(_dereq_,module,exports){
var getNative = _dereq_('./_getNative'),
    root = _dereq_('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":85,"./_root":128}],6:[function(_dereq_,module,exports){
var mapCacheClear = _dereq_('./_mapCacheClear'),
    mapCacheDelete = _dereq_('./_mapCacheDelete'),
    mapCacheGet = _dereq_('./_mapCacheGet'),
    mapCacheHas = _dereq_('./_mapCacheHas'),
    mapCacheSet = _dereq_('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

},{"./_mapCacheClear":113,"./_mapCacheDelete":114,"./_mapCacheGet":115,"./_mapCacheHas":116,"./_mapCacheSet":117}],7:[function(_dereq_,module,exports){
var getNative = _dereq_('./_getNative'),
    root = _dereq_('./_root');

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

},{"./_getNative":85,"./_root":128}],8:[function(_dereq_,module,exports){
var getNative = _dereq_('./_getNative'),
    root = _dereq_('./_root');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

},{"./_getNative":85,"./_root":128}],9:[function(_dereq_,module,exports){
var MapCache = _dereq_('./_MapCache'),
    setCacheAdd = _dereq_('./_setCacheAdd'),
    setCacheHas = _dereq_('./_setCacheHas');

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

},{"./_MapCache":6,"./_setCacheAdd":129,"./_setCacheHas":130}],10:[function(_dereq_,module,exports){
var ListCache = _dereq_('./_ListCache'),
    stackClear = _dereq_('./_stackClear'),
    stackDelete = _dereq_('./_stackDelete'),
    stackGet = _dereq_('./_stackGet'),
    stackHas = _dereq_('./_stackHas'),
    stackSet = _dereq_('./_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

},{"./_ListCache":4,"./_stackClear":134,"./_stackDelete":135,"./_stackGet":136,"./_stackHas":137,"./_stackSet":138}],11:[function(_dereq_,module,exports){
var root = _dereq_('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":128}],12:[function(_dereq_,module,exports){
var root = _dereq_('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":128}],13:[function(_dereq_,module,exports){
var getNative = _dereq_('./_getNative'),
    root = _dereq_('./_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

},{"./_getNative":85,"./_root":128}],14:[function(_dereq_,module,exports){
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;

},{}],15:[function(_dereq_,module,exports){
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;

},{}],16:[function(_dereq_,module,exports){
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

},{}],17:[function(_dereq_,module,exports){
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],18:[function(_dereq_,module,exports){
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],19:[function(_dereq_,module,exports){
var baseTimes = _dereq_('./_baseTimes'),
    isArguments = _dereq_('./isArguments'),
    isArray = _dereq_('./isArray'),
    isBuffer = _dereq_('./isBuffer'),
    isIndex = _dereq_('./_isIndex'),
    isTypedArray = _dereq_('./isTypedArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

},{"./_baseTimes":55,"./_isIndex":101,"./isArguments":150,"./isArray":151,"./isBuffer":153,"./isTypedArray":163}],20:[function(_dereq_,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],21:[function(_dereq_,module,exports){
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

},{}],22:[function(_dereq_,module,exports){
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

},{}],23:[function(_dereq_,module,exports){
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],24:[function(_dereq_,module,exports){
var baseAssignValue = _dereq_('./_baseAssignValue'),
    eq = _dereq_('./eq');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

},{"./_baseAssignValue":28,"./eq":145}],25:[function(_dereq_,module,exports){
var eq = _dereq_('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":145}],26:[function(_dereq_,module,exports){
var copyObject = _dereq_('./_copyObject'),
    keys = _dereq_('./keys');

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

},{"./_copyObject":69,"./keys":164}],27:[function(_dereq_,module,exports){
var copyObject = _dereq_('./_copyObject'),
    keysIn = _dereq_('./keysIn');

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

},{"./_copyObject":69,"./keysIn":165}],28:[function(_dereq_,module,exports){
var defineProperty = _dereq_('./_defineProperty');

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

},{"./_defineProperty":76}],29:[function(_dereq_,module,exports){
var Stack = _dereq_('./_Stack'),
    arrayEach = _dereq_('./_arrayEach'),
    assignValue = _dereq_('./_assignValue'),
    baseAssign = _dereq_('./_baseAssign'),
    baseAssignIn = _dereq_('./_baseAssignIn'),
    cloneBuffer = _dereq_('./_cloneBuffer'),
    copyArray = _dereq_('./_copyArray'),
    copySymbols = _dereq_('./_copySymbols'),
    copySymbolsIn = _dereq_('./_copySymbolsIn'),
    getAllKeys = _dereq_('./_getAllKeys'),
    getAllKeysIn = _dereq_('./_getAllKeysIn'),
    getTag = _dereq_('./_getTag'),
    initCloneArray = _dereq_('./_initCloneArray'),
    initCloneByTag = _dereq_('./_initCloneByTag'),
    initCloneObject = _dereq_('./_initCloneObject'),
    isArray = _dereq_('./isArray'),
    isBuffer = _dereq_('./isBuffer'),
    isObject = _dereq_('./isObject'),
    keys = _dereq_('./keys');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

},{"./_Stack":10,"./_arrayEach":17,"./_assignValue":24,"./_baseAssign":26,"./_baseAssignIn":27,"./_cloneBuffer":61,"./_copyArray":68,"./_copySymbols":70,"./_copySymbolsIn":71,"./_getAllKeys":81,"./_getAllKeysIn":82,"./_getTag":90,"./_initCloneArray":98,"./_initCloneByTag":99,"./_initCloneObject":100,"./isArray":151,"./isBuffer":153,"./isObject":160,"./keys":164}],30:[function(_dereq_,module,exports){
var isObject = _dereq_('./isObject');

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;

},{"./isObject":160}],31:[function(_dereq_,module,exports){
var baseForOwn = _dereq_('./_baseForOwn'),
    createBaseEach = _dereq_('./_createBaseEach');

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./_baseForOwn":34,"./_createBaseEach":74}],32:[function(_dereq_,module,exports){
var baseEach = _dereq_('./_baseEach');

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;

},{"./_baseEach":31}],33:[function(_dereq_,module,exports){
var createBaseFor = _dereq_('./_createBaseFor');

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./_createBaseFor":75}],34:[function(_dereq_,module,exports){
var baseFor = _dereq_('./_baseFor'),
    keys = _dereq_('./keys');

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"./_baseFor":33,"./keys":164}],35:[function(_dereq_,module,exports){
var castPath = _dereq_('./_castPath'),
    toKey = _dereq_('./_toKey');

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./_castPath":59,"./_toKey":140}],36:[function(_dereq_,module,exports){
var arrayPush = _dereq_('./_arrayPush'),
    isArray = _dereq_('./isArray');

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

},{"./_arrayPush":21,"./isArray":151}],37:[function(_dereq_,module,exports){
var Symbol = _dereq_('./_Symbol'),
    getRawTag = _dereq_('./_getRawTag'),
    objectToString = _dereq_('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":11,"./_getRawTag":87,"./_objectToString":125}],38:[function(_dereq_,module,exports){
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

},{}],39:[function(_dereq_,module,exports){
var baseGetTag = _dereq_('./_baseGetTag'),
    isObjectLike = _dereq_('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

},{"./_baseGetTag":37,"./isObjectLike":161}],40:[function(_dereq_,module,exports){
var baseIsEqualDeep = _dereq_('./_baseIsEqualDeep'),
    isObjectLike = _dereq_('./isObjectLike');

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":41,"./isObjectLike":161}],41:[function(_dereq_,module,exports){
var Stack = _dereq_('./_Stack'),
    equalArrays = _dereq_('./_equalArrays'),
    equalByTag = _dereq_('./_equalByTag'),
    equalObjects = _dereq_('./_equalObjects'),
    getTag = _dereq_('./_getTag'),
    isArray = _dereq_('./isArray'),
    isBuffer = _dereq_('./isBuffer'),
    isTypedArray = _dereq_('./isTypedArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

},{"./_Stack":10,"./_equalArrays":77,"./_equalByTag":78,"./_equalObjects":79,"./_getTag":90,"./isArray":151,"./isBuffer":153,"./isTypedArray":163}],42:[function(_dereq_,module,exports){
var Stack = _dereq_('./_Stack'),
    baseIsEqual = _dereq_('./_baseIsEqual');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./_Stack":10,"./_baseIsEqual":40}],43:[function(_dereq_,module,exports){
var isFunction = _dereq_('./isFunction'),
    isMasked = _dereq_('./_isMasked'),
    isObject = _dereq_('./isObject'),
    toSource = _dereq_('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./_isMasked":105,"./_toSource":141,"./isFunction":156,"./isObject":160}],44:[function(_dereq_,module,exports){
var baseGetTag = _dereq_('./_baseGetTag'),
    isLength = _dereq_('./isLength'),
    isObjectLike = _dereq_('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

},{"./_baseGetTag":37,"./isLength":157,"./isObjectLike":161}],45:[function(_dereq_,module,exports){
var baseMatches = _dereq_('./_baseMatches'),
    baseMatchesProperty = _dereq_('./_baseMatchesProperty'),
    identity = _dereq_('./identity'),
    isArray = _dereq_('./isArray'),
    property = _dereq_('./property');

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

},{"./_baseMatches":48,"./_baseMatchesProperty":49,"./identity":149,"./isArray":151,"./property":167}],46:[function(_dereq_,module,exports){
var isPrototype = _dereq_('./_isPrototype'),
    nativeKeys = _dereq_('./_nativeKeys');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

},{"./_isPrototype":106,"./_nativeKeys":122}],47:[function(_dereq_,module,exports){
var isObject = _dereq_('./isObject'),
    isPrototype = _dereq_('./_isPrototype'),
    nativeKeysIn = _dereq_('./_nativeKeysIn');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

},{"./_isPrototype":106,"./_nativeKeysIn":123,"./isObject":160}],48:[function(_dereq_,module,exports){
var baseIsMatch = _dereq_('./_baseIsMatch'),
    getMatchData = _dereq_('./_getMatchData'),
    matchesStrictComparable = _dereq_('./_matchesStrictComparable');

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

},{"./_baseIsMatch":42,"./_getMatchData":84,"./_matchesStrictComparable":119}],49:[function(_dereq_,module,exports){
var baseIsEqual = _dereq_('./_baseIsEqual'),
    get = _dereq_('./get'),
    hasIn = _dereq_('./hasIn'),
    isKey = _dereq_('./_isKey'),
    isStrictComparable = _dereq_('./_isStrictComparable'),
    matchesStrictComparable = _dereq_('./_matchesStrictComparable'),
    toKey = _dereq_('./_toKey');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

},{"./_baseIsEqual":40,"./_isKey":103,"./_isStrictComparable":107,"./_matchesStrictComparable":119,"./_toKey":140,"./get":147,"./hasIn":148}],50:[function(_dereq_,module,exports){
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],51:[function(_dereq_,module,exports){
var baseGet = _dereq_('./_baseGet');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

},{"./_baseGet":35}],52:[function(_dereq_,module,exports){
var identity = _dereq_('./identity'),
    overRest = _dereq_('./_overRest'),
    setToString = _dereq_('./_setToString');

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

},{"./_overRest":127,"./_setToString":132,"./identity":149}],53:[function(_dereq_,module,exports){
var assignValue = _dereq_('./_assignValue'),
    castPath = _dereq_('./_castPath'),
    isIndex = _dereq_('./_isIndex'),
    isObject = _dereq_('./isObject'),
    toKey = _dereq_('./_toKey');

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;

},{"./_assignValue":24,"./_castPath":59,"./_isIndex":101,"./_toKey":140,"./isObject":160}],54:[function(_dereq_,module,exports){
var constant = _dereq_('./constant'),
    defineProperty = _dereq_('./_defineProperty'),
    identity = _dereq_('./identity');

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

},{"./_defineProperty":76,"./constant":144,"./identity":149}],55:[function(_dereq_,module,exports){
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

},{}],56:[function(_dereq_,module,exports){
var Symbol = _dereq_('./_Symbol'),
    arrayMap = _dereq_('./_arrayMap'),
    isArray = _dereq_('./isArray'),
    isSymbol = _dereq_('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

},{"./_Symbol":11,"./_arrayMap":20,"./isArray":151,"./isSymbol":162}],57:[function(_dereq_,module,exports){
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;

},{}],58:[function(_dereq_,module,exports){
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

},{}],59:[function(_dereq_,module,exports){
var isArray = _dereq_('./isArray'),
    isKey = _dereq_('./_isKey'),
    stringToPath = _dereq_('./_stringToPath'),
    toString = _dereq_('./toString');

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

},{"./_isKey":103,"./_stringToPath":139,"./isArray":151,"./toString":171}],60:[function(_dereq_,module,exports){
var Uint8Array = _dereq_('./_Uint8Array');

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

},{"./_Uint8Array":12}],61:[function(_dereq_,module,exports){
var root = _dereq_('./_root');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

},{"./_root":128}],62:[function(_dereq_,module,exports){
var cloneArrayBuffer = _dereq_('./_cloneArrayBuffer');

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

},{"./_cloneArrayBuffer":60}],63:[function(_dereq_,module,exports){
var addMapEntry = _dereq_('./_addMapEntry'),
    arrayReduce = _dereq_('./_arrayReduce'),
    mapToArray = _dereq_('./_mapToArray');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;

},{"./_addMapEntry":14,"./_arrayReduce":22,"./_mapToArray":118}],64:[function(_dereq_,module,exports){
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

},{}],65:[function(_dereq_,module,exports){
var addSetEntry = _dereq_('./_addSetEntry'),
    arrayReduce = _dereq_('./_arrayReduce'),
    setToArray = _dereq_('./_setToArray');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;

},{"./_addSetEntry":15,"./_arrayReduce":22,"./_setToArray":131}],66:[function(_dereq_,module,exports){
var Symbol = _dereq_('./_Symbol');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

},{"./_Symbol":11}],67:[function(_dereq_,module,exports){
var cloneArrayBuffer = _dereq_('./_cloneArrayBuffer');

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

},{"./_cloneArrayBuffer":60}],68:[function(_dereq_,module,exports){
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

},{}],69:[function(_dereq_,module,exports){
var assignValue = _dereq_('./_assignValue'),
    baseAssignValue = _dereq_('./_baseAssignValue');

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

},{"./_assignValue":24,"./_baseAssignValue":28}],70:[function(_dereq_,module,exports){
var copyObject = _dereq_('./_copyObject'),
    getSymbols = _dereq_('./_getSymbols');

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

},{"./_copyObject":69,"./_getSymbols":88}],71:[function(_dereq_,module,exports){
var copyObject = _dereq_('./_copyObject'),
    getSymbolsIn = _dereq_('./_getSymbolsIn');

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

},{"./_copyObject":69,"./_getSymbolsIn":89}],72:[function(_dereq_,module,exports){
var root = _dereq_('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":128}],73:[function(_dereq_,module,exports){
var baseRest = _dereq_('./_baseRest'),
    isIterateeCall = _dereq_('./_isIterateeCall');

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"./_baseRest":52,"./_isIterateeCall":102}],74:[function(_dereq_,module,exports){
var isArrayLike = _dereq_('./isArrayLike');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./isArrayLike":152}],75:[function(_dereq_,module,exports){
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{}],76:[function(_dereq_,module,exports){
var getNative = _dereq_('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":85}],77:[function(_dereq_,module,exports){
var SetCache = _dereq_('./_SetCache'),
    arraySome = _dereq_('./_arraySome'),
    cacheHas = _dereq_('./_cacheHas');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

},{"./_SetCache":9,"./_arraySome":23,"./_cacheHas":58}],78:[function(_dereq_,module,exports){
var Symbol = _dereq_('./_Symbol'),
    Uint8Array = _dereq_('./_Uint8Array'),
    eq = _dereq_('./eq'),
    equalArrays = _dereq_('./_equalArrays'),
    mapToArray = _dereq_('./_mapToArray'),
    setToArray = _dereq_('./_setToArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

},{"./_Symbol":11,"./_Uint8Array":12,"./_equalArrays":77,"./_mapToArray":118,"./_setToArray":131,"./eq":145}],79:[function(_dereq_,module,exports){
var getAllKeys = _dereq_('./_getAllKeys');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

},{"./_getAllKeys":81}],80:[function(_dereq_,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],81:[function(_dereq_,module,exports){
var baseGetAllKeys = _dereq_('./_baseGetAllKeys'),
    getSymbols = _dereq_('./_getSymbols'),
    keys = _dereq_('./keys');

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

},{"./_baseGetAllKeys":36,"./_getSymbols":88,"./keys":164}],82:[function(_dereq_,module,exports){
var baseGetAllKeys = _dereq_('./_baseGetAllKeys'),
    getSymbolsIn = _dereq_('./_getSymbolsIn'),
    keysIn = _dereq_('./keysIn');

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

},{"./_baseGetAllKeys":36,"./_getSymbolsIn":89,"./keysIn":165}],83:[function(_dereq_,module,exports){
var isKeyable = _dereq_('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":104}],84:[function(_dereq_,module,exports){
var isStrictComparable = _dereq_('./_isStrictComparable'),
    keys = _dereq_('./keys');

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;

},{"./_isStrictComparable":107,"./keys":164}],85:[function(_dereq_,module,exports){
var baseIsNative = _dereq_('./_baseIsNative'),
    getValue = _dereq_('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":43,"./_getValue":91}],86:[function(_dereq_,module,exports){
var overArg = _dereq_('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":126}],87:[function(_dereq_,module,exports){
var Symbol = _dereq_('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":11}],88:[function(_dereq_,module,exports){
var arrayFilter = _dereq_('./_arrayFilter'),
    stubArray = _dereq_('./stubArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

},{"./_arrayFilter":18,"./stubArray":169}],89:[function(_dereq_,module,exports){
var arrayPush = _dereq_('./_arrayPush'),
    getPrototype = _dereq_('./_getPrototype'),
    getSymbols = _dereq_('./_getSymbols'),
    stubArray = _dereq_('./stubArray');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;

},{"./_arrayPush":21,"./_getPrototype":86,"./_getSymbols":88,"./stubArray":169}],90:[function(_dereq_,module,exports){
var DataView = _dereq_('./_DataView'),
    Map = _dereq_('./_Map'),
    Promise = _dereq_('./_Promise'),
    Set = _dereq_('./_Set'),
    WeakMap = _dereq_('./_WeakMap'),
    baseGetTag = _dereq_('./_baseGetTag'),
    toSource = _dereq_('./_toSource');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

},{"./_DataView":2,"./_Map":5,"./_Promise":7,"./_Set":8,"./_WeakMap":13,"./_baseGetTag":37,"./_toSource":141}],91:[function(_dereq_,module,exports){
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],92:[function(_dereq_,module,exports){
var castPath = _dereq_('./_castPath'),
    isArguments = _dereq_('./isArguments'),
    isArray = _dereq_('./isArray'),
    isIndex = _dereq_('./_isIndex'),
    isLength = _dereq_('./isLength'),
    toKey = _dereq_('./_toKey');

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;

},{"./_castPath":59,"./_isIndex":101,"./_toKey":140,"./isArguments":150,"./isArray":151,"./isLength":157}],93:[function(_dereq_,module,exports){
var nativeCreate = _dereq_('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":121}],94:[function(_dereq_,module,exports){
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],95:[function(_dereq_,module,exports){
var nativeCreate = _dereq_('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":121}],96:[function(_dereq_,module,exports){
var nativeCreate = _dereq_('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":121}],97:[function(_dereq_,module,exports){
var nativeCreate = _dereq_('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":121}],98:[function(_dereq_,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;

},{}],99:[function(_dereq_,module,exports){
var cloneArrayBuffer = _dereq_('./_cloneArrayBuffer'),
    cloneDataView = _dereq_('./_cloneDataView'),
    cloneMap = _dereq_('./_cloneMap'),
    cloneRegExp = _dereq_('./_cloneRegExp'),
    cloneSet = _dereq_('./_cloneSet'),
    cloneSymbol = _dereq_('./_cloneSymbol'),
    cloneTypedArray = _dereq_('./_cloneTypedArray');

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

},{"./_cloneArrayBuffer":60,"./_cloneDataView":62,"./_cloneMap":63,"./_cloneRegExp":64,"./_cloneSet":65,"./_cloneSymbol":66,"./_cloneTypedArray":67}],100:[function(_dereq_,module,exports){
var baseCreate = _dereq_('./_baseCreate'),
    getPrototype = _dereq_('./_getPrototype'),
    isPrototype = _dereq_('./_isPrototype');

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;

},{"./_baseCreate":30,"./_getPrototype":86,"./_isPrototype":106}],101:[function(_dereq_,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;

},{}],102:[function(_dereq_,module,exports){
var eq = _dereq_('./eq'),
    isArrayLike = _dereq_('./isArrayLike'),
    isIndex = _dereq_('./_isIndex'),
    isObject = _dereq_('./isObject');

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

},{"./_isIndex":101,"./eq":145,"./isArrayLike":152,"./isObject":160}],103:[function(_dereq_,module,exports){
var isArray = _dereq_('./isArray'),
    isSymbol = _dereq_('./isSymbol');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;

},{"./isArray":151,"./isSymbol":162}],104:[function(_dereq_,module,exports){
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

},{}],105:[function(_dereq_,module,exports){
var coreJsData = _dereq_('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

},{"./_coreJsData":72}],106:[function(_dereq_,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;

},{}],107:[function(_dereq_,module,exports){
var isObject = _dereq_('./isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"./isObject":160}],108:[function(_dereq_,module,exports){
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],109:[function(_dereq_,module,exports){
var assocIndexOf = _dereq_('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":25}],110:[function(_dereq_,module,exports){
var assocIndexOf = _dereq_('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":25}],111:[function(_dereq_,module,exports){
var assocIndexOf = _dereq_('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":25}],112:[function(_dereq_,module,exports){
var assocIndexOf = _dereq_('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":25}],113:[function(_dereq_,module,exports){
var Hash = _dereq_('./_Hash'),
    ListCache = _dereq_('./_ListCache'),
    Map = _dereq_('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

},{"./_Hash":3,"./_ListCache":4,"./_Map":5}],114:[function(_dereq_,module,exports){
var getMapData = _dereq_('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":83}],115:[function(_dereq_,module,exports){
var getMapData = _dereq_('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":83}],116:[function(_dereq_,module,exports){
var getMapData = _dereq_('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":83}],117:[function(_dereq_,module,exports){
var getMapData = _dereq_('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":83}],118:[function(_dereq_,module,exports){
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

},{}],119:[function(_dereq_,module,exports){
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;

},{}],120:[function(_dereq_,module,exports){
var memoize = _dereq_('./memoize');

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

},{"./memoize":166}],121:[function(_dereq_,module,exports){
var getNative = _dereq_('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":85}],122:[function(_dereq_,module,exports){
var overArg = _dereq_('./_overArg');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

},{"./_overArg":126}],123:[function(_dereq_,module,exports){
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

},{}],124:[function(_dereq_,module,exports){
var freeGlobal = _dereq_('./_freeGlobal');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

},{"./_freeGlobal":80}],125:[function(_dereq_,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],126:[function(_dereq_,module,exports){
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],127:[function(_dereq_,module,exports){
var apply = _dereq_('./_apply');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

},{"./_apply":16}],128:[function(_dereq_,module,exports){
var freeGlobal = _dereq_('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":80}],129:[function(_dereq_,module,exports){
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

},{}],130:[function(_dereq_,module,exports){
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

},{}],131:[function(_dereq_,module,exports){
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

},{}],132:[function(_dereq_,module,exports){
var baseSetToString = _dereq_('./_baseSetToString'),
    shortOut = _dereq_('./_shortOut');

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

},{"./_baseSetToString":54,"./_shortOut":133}],133:[function(_dereq_,module,exports){
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

},{}],134:[function(_dereq_,module,exports){
var ListCache = _dereq_('./_ListCache');

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;

},{"./_ListCache":4}],135:[function(_dereq_,module,exports){
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

},{}],136:[function(_dereq_,module,exports){
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

},{}],137:[function(_dereq_,module,exports){
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

},{}],138:[function(_dereq_,module,exports){
var ListCache = _dereq_('./_ListCache'),
    Map = _dereq_('./_Map'),
    MapCache = _dereq_('./_MapCache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

},{"./_ListCache":4,"./_Map":5,"./_MapCache":6}],139:[function(_dereq_,module,exports){
var memoizeCapped = _dereq_('./_memoizeCapped');

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;

},{"./_memoizeCapped":120}],140:[function(_dereq_,module,exports){
var isSymbol = _dereq_('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;

},{"./isSymbol":162}],141:[function(_dereq_,module,exports){
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

},{}],142:[function(_dereq_,module,exports){
var assignValue = _dereq_('./_assignValue'),
    copyObject = _dereq_('./_copyObject'),
    createAssigner = _dereq_('./_createAssigner'),
    isArrayLike = _dereq_('./isArrayLike'),
    isPrototype = _dereq_('./_isPrototype'),
    keys = _dereq_('./keys');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;

},{"./_assignValue":24,"./_copyObject":69,"./_createAssigner":73,"./_isPrototype":106,"./isArrayLike":152,"./keys":164}],143:[function(_dereq_,module,exports){
var baseClone = _dereq_('./_baseClone');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;

},{"./_baseClone":29}],144:[function(_dereq_,module,exports){
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;

},{}],145:[function(_dereq_,module,exports){
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],146:[function(_dereq_,module,exports){
var arrayFilter = _dereq_('./_arrayFilter'),
    baseFilter = _dereq_('./_baseFilter'),
    baseIteratee = _dereq_('./_baseIteratee'),
    isArray = _dereq_('./isArray');

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;

},{"./_arrayFilter":18,"./_baseFilter":32,"./_baseIteratee":45,"./isArray":151}],147:[function(_dereq_,module,exports){
var baseGet = _dereq_('./_baseGet');

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

},{"./_baseGet":35}],148:[function(_dereq_,module,exports){
var baseHasIn = _dereq_('./_baseHasIn'),
    hasPath = _dereq_('./_hasPath');

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

},{"./_baseHasIn":38,"./_hasPath":92}],149:[function(_dereq_,module,exports){
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],150:[function(_dereq_,module,exports){
var baseIsArguments = _dereq_('./_baseIsArguments'),
    isObjectLike = _dereq_('./isObjectLike');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

},{"./_baseIsArguments":39,"./isObjectLike":161}],151:[function(_dereq_,module,exports){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],152:[function(_dereq_,module,exports){
var isFunction = _dereq_('./isFunction'),
    isLength = _dereq_('./isLength');

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./isFunction":156,"./isLength":157}],153:[function(_dereq_,module,exports){
var root = _dereq_('./_root'),
    stubFalse = _dereq_('./stubFalse');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

},{"./_root":128,"./stubFalse":170}],154:[function(_dereq_,module,exports){
var baseIsEqual = _dereq_('./_baseIsEqual');

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

},{"./_baseIsEqual":40}],155:[function(_dereq_,module,exports){
var root = _dereq_('./_root');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;

},{"./_root":128}],156:[function(_dereq_,module,exports){
var baseGetTag = _dereq_('./_baseGetTag'),
    isObject = _dereq_('./isObject');

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":37,"./isObject":160}],157:[function(_dereq_,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],158:[function(_dereq_,module,exports){
var isNumber = _dereq_('./isNumber');

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;

},{"./isNumber":159}],159:[function(_dereq_,module,exports){
var baseGetTag = _dereq_('./_baseGetTag'),
    isObjectLike = _dereq_('./isObjectLike');

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;

},{"./_baseGetTag":37,"./isObjectLike":161}],160:[function(_dereq_,module,exports){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],161:[function(_dereq_,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],162:[function(_dereq_,module,exports){
var baseGetTag = _dereq_('./_baseGetTag'),
    isObjectLike = _dereq_('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":37,"./isObjectLike":161}],163:[function(_dereq_,module,exports){
var baseIsTypedArray = _dereq_('./_baseIsTypedArray'),
    baseUnary = _dereq_('./_baseUnary'),
    nodeUtil = _dereq_('./_nodeUtil');

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

},{"./_baseIsTypedArray":44,"./_baseUnary":57,"./_nodeUtil":124}],164:[function(_dereq_,module,exports){
var arrayLikeKeys = _dereq_('./_arrayLikeKeys'),
    baseKeys = _dereq_('./_baseKeys'),
    isArrayLike = _dereq_('./isArrayLike');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

},{"./_arrayLikeKeys":19,"./_baseKeys":46,"./isArrayLike":152}],165:[function(_dereq_,module,exports){
var arrayLikeKeys = _dereq_('./_arrayLikeKeys'),
    baseKeysIn = _dereq_('./_baseKeysIn'),
    isArrayLike = _dereq_('./isArrayLike');

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

},{"./_arrayLikeKeys":19,"./_baseKeysIn":47,"./isArrayLike":152}],166:[function(_dereq_,module,exports){
var MapCache = _dereq_('./_MapCache');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

},{"./_MapCache":6}],167:[function(_dereq_,module,exports){
var baseProperty = _dereq_('./_baseProperty'),
    basePropertyDeep = _dereq_('./_basePropertyDeep'),
    isKey = _dereq_('./_isKey'),
    toKey = _dereq_('./_toKey');

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

},{"./_baseProperty":50,"./_basePropertyDeep":51,"./_isKey":103,"./_toKey":140}],168:[function(_dereq_,module,exports){
var baseSet = _dereq_('./_baseSet');

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

},{"./_baseSet":53}],169:[function(_dereq_,module,exports){
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

},{}],170:[function(_dereq_,module,exports){
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

},{}],171:[function(_dereq_,module,exports){
var baseToString = _dereq_('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

},{"./_baseToString":56}],172:[function(_dereq_,module,exports){
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            _dereq_('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

},{}],173:[function(_dereq_,module,exports){
/*!
 * Signature Pad v1.6.0
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.SignaturePad = factory());
}(this, (function () { 'use strict';

function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || new Date().getTime();
}

Point.prototype.velocityFrom = function (start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};

Point.prototype.distanceTo = function (start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};

function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}

// Returns approximated length.
Bezier.prototype.length = function () {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;

  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }

  return length;
};

/* eslint-disable no-multi-spaces, space-in-parens */
Bezier.prototype._point = function (t, start, c1, c2, end) {
  return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};

function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};

  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.dotSize = opts.dotSize || function () {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || 'black';
  this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;

  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
  this.clear();

  // We need add these inline so they are available to unbind while still having
  // access to 'self' we could use _.bind but it's not worth adding a dependency.
  this._handleMouseDown = function (event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };

  this._handleMouseMove = function (event) {
    if (self._mouseButtonDown) {
      self._strokeUpdate(event);
    }
  };

  this._handleMouseUp = function (event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };

  this._handleTouchStart = function (event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };

  this._handleTouchMove = function (event) {
    // Prevent scrolling.
    event.preventDefault();

    var touch = event.targetTouches[0];
    self._strokeUpdate(touch);
  };

  this._handleTouchEnd = function (event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };

  // Enable mouse and touch event handlers
  this.on();
}

// Public methods
SignaturePad.prototype.clear = function () {
  var ctx = this._ctx;
  var canvas = this._canvas;

  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this._data = [];
  this._reset();
  this._isEmpty = true;
};

SignaturePad.prototype.fromDataURL = function (dataUrl) {
  var _this = this;

  var image = new Image();
  var ratio = window.devicePixelRatio || 1;
  var width = this._canvas.width / ratio;
  var height = this._canvas.height / ratio;

  this._reset();
  image.src = dataUrl;
  image.onload = function () {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};

SignaturePad.prototype.toDataURL = function (type) {
  var _canvas;

  switch (type) {
    case 'image/svg+xml':
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }

      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};

SignaturePad.prototype.on = function () {
  this._handleMouseEvents();
  this._handleTouchEvents();
};

SignaturePad.prototype.off = function () {
  this._canvas.removeEventListener('mousedown', this._handleMouseDown);
  this._canvas.removeEventListener('mousemove', this._handleMouseMove);
  document.removeEventListener('mouseup', this._handleMouseUp);

  this._canvas.removeEventListener('touchstart', this._handleTouchStart);
  this._canvas.removeEventListener('touchmove', this._handleTouchMove);
  this._canvas.removeEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype.isEmpty = function () {
  return this._isEmpty;
};

// Private methods
SignaturePad.prototype._strokeBegin = function (event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);

  if (typeof this.onBegin === 'function') {
    this.onBegin(event);
  }
};

SignaturePad.prototype._strokeUpdate = function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var point = this._createPoint(x, y);

  var _addPoint = this._addPoint(point),
      curve = _addPoint.curve,
      widths = _addPoint.widths;

  if (curve && widths) {
    this._drawCurve(curve, widths.start, widths.end);
  }

  this._data[this._data.length - 1].push({
    x: point.x,
    y: point.y,
    time: point.time
  });
};

SignaturePad.prototype._strokeEnd = function (event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0];

  if (!canDrawCurve && point) {
    this._drawDot(point);
  }

  if (typeof this.onEnd === 'function') {
    this.onEnd(event);
  }
};

SignaturePad.prototype._handleMouseEvents = function () {
  this._mouseButtonDown = false;

  this._canvas.addEventListener('mousedown', this._handleMouseDown);
  this._canvas.addEventListener('mousemove', this._handleMouseMove);
  document.addEventListener('mouseup', this._handleMouseUp);
};

SignaturePad.prototype._handleTouchEvents = function () {
  // Pass touch events to canvas element on mobile IE11 and Edge.
  this._canvas.style.msTouchAction = 'none';
  this._canvas.style.touchAction = 'none';

  this._canvas.addEventListener('touchstart', this._handleTouchStart);
  this._canvas.addEventListener('touchmove', this._handleTouchMove);
  this._canvas.addEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype._reset = function () {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};

SignaturePad.prototype._createPoint = function (x, y, time) {
  var rect = this._canvas.getBoundingClientRect();

  return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
};

SignaturePad.prototype._addPoint = function (point) {
  var points = this.points;
  var tmp = void 0;

  points.push(point);

  if (points.length > 2) {
    // To reduce the initial lag make it work with 3 points
    // by copying the first point to the beginning.
    if (points.length === 3) points.unshift(points[0]);

    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);

    // Remove the first element from the list,
    // so that we always have no more than 4 points in points array.
    points.shift();

    return { curve: curve, widths: widths };
  }

  return {};
};

SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;

  var m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
  var m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };

  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;

  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };

  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;

  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};

SignaturePad.prototype._calculateCurveWidths = function (curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };

  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

  var newWidth = this._strokeWidth(velocity);

  widths.start = this._lastWidth;
  widths.end = newWidth;

  this._lastVelocity = velocity;
  this._lastWidth = newWidth;

  return widths;
};

SignaturePad.prototype._strokeWidth = function (velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};

SignaturePad.prototype._drawPoint = function (x, y, size) {
  var ctx = this._ctx;

  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};

SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());

  ctx.beginPath();

  for (var i = 0; i < drawSteps; i += 1) {
    // Calculate the Bezier (x, y) coordinate for this step.
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;

    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;

    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;

    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }

  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._drawDot = function (point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];

    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);

        if (j === 0) {
          // First point in a group. Nothing to draw yet.
          this._reset();
          this._addPoint(point);
        } else if (j !== group.length - 1) {
          // Middle point in a group.
          var _addPoint2 = this._addPoint(point),
              curve = _addPoint2.curve,
              widths = _addPoint2.widths;

          if (curve && widths) {
            drawCurve(curve, widths);
          }
        } else {
          // Last point in a group. Do nothing.
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};

SignaturePad.prototype._toSVG = function () {
  var _this2 = this;

  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttributeNS(null, 'width', canvas.width);
  svg.setAttributeNS(null, 'height', canvas.height);

  this._fromData(pointGroups, function (curve, widths) {
    var path = document.createElement('path');

    // Need to check curve for NaN values, these pop up when drawing
    // lines on the canvas that are not continuous. E.g. Sharp corners
    // or stopping mid-stroke and than continuing without lifting mouse.
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));

      path.setAttribute('d', attr);
      path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
      path.setAttribute('stroke', _this2.penColor);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      svg.appendChild(path);
    }
  }, function (rawPoint) {
    var circle = document.createElement('circle');
    var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute('r', dotSize);
    circle.setAttribute('cx', rawPoint.x);
    circle.setAttribute('cy', rawPoint.y);
    circle.setAttribute('fill', _this2.penColor);

    svg.appendChild(circle);
  });

  var prefix = 'data:image/svg+xml;base64,';
  var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
  var body = svg.innerHTML;

  // IE hack for missing innerHTML property on SVGElement
  if (body === undefined) {
    var dummy = document.createElement('dummy');
    var nodes = svg.childNodes;
    dummy.innerHTML = '';

    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }

    body = dummy.innerHTML;
  }

  var footer = '</svg>';
  var data = header + body + footer;

  return prefix + btoa(data);
};

SignaturePad.prototype.fromData = function (pointGroups) {
  var _this3 = this;

  this.clear();

  this._fromData(pointGroups, function (curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function (rawPoint) {
    return _this3._drawDot(rawPoint);
  });
};

SignaturePad.prototype.toData = function () {
  return this._data;
};

return SignaturePad;

})));

},{}],174:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  /*jshint camelcase: false */
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('address', {
        title: 'Address',
        template: function($scope) {
          return $scope.component.multiple ? 'formio/components/address-multiple.html' : 'formio/components/address.html';
        },
        controller: ['$scope', '$http', function($scope, $http) {
          if ($scope.builder) return;
          $scope.address = {};
          $scope.addresses = [];
          $scope.refreshAddress = function(address) {
            var params = {
              address: address,
              sensor: false
            };
            if (!address) {
              return;
            }
            if ($scope.component.map && $scope.component.map.region) {
              params.region = $scope.component.map.region;
            }
            if ($scope.component.map && $scope.component.map.key) {
              params.key = $scope.component.map.key;
            }
            return $http.get(
              'https://maps.googleapis.com/maps/api/geocode/json',
              {
                disableJWT: true,
                params: params,
                headers: {
                  Authorization: undefined,
                  Pragma: undefined,
                  'Cache-Control': undefined
                }
              }
            ).then(function(response) {
              $scope.addresses = response.data.results;
            });
          };
        }],
        tableView: function(data) {
          return data ? data.formatted_address : '';
        },
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'addressField',
          placeholder: '',
          multiple: false,
          protected: false,
          clearOnHide: true,
          unique: false,
          persistent: true,
          hidden: false,
          map: {
            region: '',
            key: ''
          },
          validate: {
            required: false
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/address.html',
        "<label ng-if=\"component.label && !component.hideLabel\" for=\"{{ componentId }}\" ng-class=\"{'field-required': isRequired(component)}\">{{ component.label | formioTranslate:null:builder }}</label>\r\n<span ng-if=\"!component.label && isRequired(component)\" class=\"glyphicon glyphicon-asterisk form-control-feedback field-required-inline\" aria-hidden=\"true\"></span>\r\n<ui-select ng-model=\"data[component.key]\" safe-multiple-to-single ng-disabled=\"readOnly\" ng-required=\"isRequired(component)\" id=\"{{ componentId }}\" name=\"{{ componentId }}\" tabindex=\"{{ component.tabindex || 0 }}\" theme=\"bootstrap\">\r\n  <ui-select-match class=\"ui-select-match\" placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\">{{$item.formatted_address || $select.selected.formatted_address}}</ui-select-match>\r\n  <ui-select-choices class=\"ui-select-choices\" repeat=\"address in addresses\" refresh=\"refreshAddress($select.search)\" refresh-delay=\"500\">\r\n    <div ng-bind-html=\"address.formatted_address | highlight: $select.search\"></div>\r\n  </ui-select-choices>\r\n</ui-select>\r\n<formio-errors ng-if=\"::!builder\"></formio-errors>\r\n"
      );

      // Change the ui-select to ui-select multiple.
      $templateCache.put('formio/components/address-multiple.html',
        $templateCache.get('formio/components/address.html').replace('<ui-select', '<ui-select multiple')
      );
    }
  ]);
};

},{}],175:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('button', {
        title: 'Button',
        template: 'formio/components/button.html',
        settings: {
          input: true,
          label: 'Submit',
          tableView: false,
          key: 'submit',
          size: 'md',
          leftIcon: '',
          rightIcon: '',
          block: false,
          action: 'submit',
          disableOnInvalid: false,
          theme: 'primary'
        },
        controller: ['$scope', function($scope) {
          if ($scope.builder) return;
          var settings = $scope.component;
          $scope.getButtonType = function() {
            switch (settings.action) {
              case 'submit':
                return 'submit';
              case 'reset':
                return 'reset';
              case 'event':
              case 'oauth':
              default:
                return 'button';
            }
          };

          var onClick = function() {
            switch (settings.action) {
              case 'submit':
                return;
              case 'event':
                $scope.$emit($scope.component.event, $scope.data);
                break;
              case 'reset':
                $scope.resetForm();
                break;
              case 'oauth':
                if (!settings.oauth) {
                  $scope.showAlerts({
                    type: 'danger',
                    message: 'You must assign this button to an OAuth action before it will work.'
                  });
                  break;
                }
                if (settings.oauth.error) {
                  $scope.showAlerts({
                    type: 'danger',
                    message: settings.oauth.error
                  });
                  break;
                }
                $scope.openOAuth(settings.oauth);
                break;
            }
          };

          $scope.$on('buttonClick', function(event, component, componentId) {
            // Ensure the componentId's match (even though they always should).
            if (componentId !== $scope.componentId) {
              return;
            }
            onClick();
          });

          $scope.openOAuth = function(settings) {
            /*eslint-disable camelcase */
            var params = {
              response_type: 'code',
              client_id: settings.clientId,
              redirect_uri: window.location.origin || window.location.protocol + '//' + window.location.host,
              state: settings.state,
              scope: settings.scope
            };
            /*eslint-enable camelcase */

            // Make display optional.
            if (settings.display) {
              params.display = settings.display;
            }
            params = Object.keys(params).map(function(key) {
              return key + '=' + encodeURIComponent(params[key]);
            }).join('&');

            var url = settings.authURI + '?' + params;

            // TODO: make window options from oauth settings, have better defaults
            var popup = window.open(url, settings.provider, 'width=1020,height=618');
            var interval = setInterval(function() {
              try {
                var popupHost = popup.location.host;
                var currentHost = window.location.host;
                if (popup && !popup.closed && popupHost === currentHost && popup.location.search) {
                  popup.close();
                  var params = popup.location.search.substr(1).split('&').reduce(function(params, param) {
                    var split = param.split('=');
                    params[split[0]] = split[1];
                    return params;
                  }, {});
                  if (params.error) {
                    $scope.showAlerts({
                      type: 'danger',
                      message: params.error_description || params.error
                    });
                    return;
                  }
                  // TODO: check for error response here
                  if (settings.state !== params.state) {
                    $scope.showAlerts({
                      type: 'danger',
                      message: 'OAuth state does not match. Please try logging in again.'
                    });
                    return;
                  }
                  var submission = {data: {}, oauth: {}};
                  submission.oauth[settings.provider] = params;
                  submission.oauth[settings.provider].redirectURI = window.location.origin || window.location.protocol + '//' + window.location.host;
                  $scope.formioForm.submitting = true;
                  $scope.formio.saveSubmission(submission)
                  .then(function(submission) {
                    // Trigger the form submission.
                    $scope.$emit('formSubmission', submission);
                  })
                  .catch(function(error) {
                    $scope.showAlerts({
                      type: 'danger',
                      message: error.message || error
                    });
                  })
                  .finally(function() {
                    $scope.formioForm.submitting = false;
                  });
                }
              }
              catch (error) {
                if (error.name !== 'SecurityError') {
                  $scope.showAlerts({
                    type: 'danger',
                    message: error.message || error
                  });
                }
              }
              if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(interval);
              }
            }, 100);
          };
        }],
        viewTemplate: 'formio/componentsView/button.html'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/button.html',
        "<button ng-attr-type=\"{{ getButtonType() }}\"\r\n  id=\"{{ componentId }}\"\r\n  name=\"{{ componentId }}\"\r\n  ng-class=\"{'btn-block': component.block}\"\r\n  class=\"btn btn-{{ component.theme }} btn-{{ component.size }}\"\r\n  ng-disabled=\"readOnly || formioForm.submitting || (component.disableOnInvalid && formioForm.$invalid)\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n  ng-click=\"$emit('buttonClick', component, componentId)\">\r\n  <span ng-if=\"component.leftIcon\" class=\"{{ component.leftIcon }}\" aria-hidden=\"true\"></span>\r\n  <span ng-if=\"component.leftIcon && component.label\">&nbsp;</span>{{ component.label | formioTranslate:null:builder }}<span ng-if=\"component.rightIcon && component.label\">&nbsp;</span>\r\n  <span ng-if=\"component.rightIcon\" class=\"{{ component.rightIcon }}\" aria-hidden=\"true\"></span>\r\n   <i ng-if=\"component.action == 'submit' && formioForm.submitting\" class=\"glyphicon glyphicon-refresh glyphicon-spin\"></i>\r\n</button>\r\n"
      );

      $templateCache.put('formio/componentsView/button.html',
        ""
      );
    }
  ]);
};

},{}],176:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('checkbox', {
        title: 'Check Box',
        template: 'formio/components/checkbox.html',
        tableView: function(data) {
          return data ? 'Yes' : 'No';
        },
        controller: ['$scope', '$timeout', function($scope, $timeout) {
          if ($scope.builder) return;
          var boolean = {
            true: true,
            false: false
          };
          var defaultValue = $scope.component.hasOwnProperty('defaultValue')
            ? boolean[$scope.component.defaultValue] || false
            : false;

          // FOR-440 - Only use the default value if the data isn't defined.
          // On the first load, attempt to set the default value.
          $scope.data[$scope.component.key] = $scope.data.hasOwnProperty($scope.component.key) && boolean.hasOwnProperty($scope.data[$scope.component.key])
            ? boolean[$scope.data[$scope.component.key]]
            : defaultValue;

          // FA-850 - Ensure the checked value is always a boolean object when loaded, then unbind the watch.
          if ($scope.component.inputType === 'checkbox') {
            $scope.$watch('data.' + $scope.component.key, function() {
              if (!$scope.data || !$scope.component.key) return;

              // If the component is required, and its current value is false, delete the entry.
              if (
                $scope.component.validate
                && $scope.component.validate.required
                && (boolean[$scope.data[$scope.component.key]] || false) === false
              ) {
                $timeout(function() {
                  delete $scope.data[$scope.component.key];
                });
              }
            });
          }
        }],
        settings: {
          input: true,
          inputType: 'checkbox',
          tableView: true,
          // This hides the default label layout so we can use a special inline label
          hideLabel: true,
          label: '',
          datagridLabel: true,
          key: 'checkboxField',
          defaultValue: false,
          protected: false,
          persistent: true,
          hidden: false,
          name: '',
          value: '',
          clearOnHide: true,
          validate: {
            required: false
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/checkbox.html',
        "<div class=\"checkbox\">\r\n  <label for=\"{{ componentId }}\" ng-class=\"{'field-required': isRequired(component)}\">\r\n    <input\r\n      ng-if=\"component.name\"\r\n      type=\"{{ component.inputType }}\"\r\n      id=\"{{ componentId }}\"\r\n      name=\"{{ component.name }}\"\r\n      value=\"{{ component.value }}\"\r\n      tabindex=\"{{ component.tabindex || 0 }}\"\r\n      ng-disabled=\"readOnly\"\r\n      ng-model=\"data[component.name]\"\r\n      ng-required=\"component.validate.required\"\r\n    >\r\n    <input\r\n      ng-if=\"!component.name\"\r\n      type=\"{{ component.inputType }}\"\r\n      id=\"{{ componentId }}\"\r\n      tabindex=\"{{ component.tabindex || 0 }}\"\r\n      ng-disabled=\"readOnly\"\r\n      ng-model=\"data[component.key]\"\r\n      ng-required=\"isRequired(component)\"\r\n      custom-validator=\"component.validate.custom\"\r\n    >\r\n    <span ng-if=\"!(component.hideLabel && component.datagridLabel === false)\">{{ component.label | formioTranslate:null:builder }}</span>\r\n  </label>\r\n</div>\r\n<div ng-if=\"!!component.description\" class=\"help-block\">\r\n  <span>{{ component.description }}</span>\r\n</div>\r\n"
      );
    }
  ]);
};

},{}],177:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('columns', {
        title: 'Columns',
        template: 'formio/components/columns.html',
        group: 'layout',
        settings: {
          input: false,
          tableView: false,
          key: 'columns',
          columns: [{components: [], width: 6, offset: 0, push: 0, pull: 0},
                    {components: [], width: 6, offset: 0, push: 0, pull: 0}]
        },
        controller: ['$scope', function($scope) {
          // Adjust column component setting from before width, offset...
          if ($scope.component.columns.length   === 2
          &&  $scope.component.columns[0].width === undefined
          &&  $scope.component.columns[1].width === undefined) {
              $scope.component.columns[0].width   = 6;
              $scope.component.columns[0].offset  = 0;
              $scope.component.columns[0].push    = 0;
              $scope.component.columns[0].pull    = 0;
              $scope.component.columns[1].width   = 6;
              $scope.component.columns[1].offset  = 0;
              $scope.component.columns[1].push    = 0;
              $scope.component.columns[1].pull    = 0;
          }
        }],
        viewTemplate: 'formio/componentsView/columns.html',
        tableView: function(data, component, $interpolate, componentInfo, tableChild) {
          var view = '<table class="table table-striped table-bordered table-child">';
          if (!tableChild) {
            view += '<thead><tr>';
          }

          var maxRows = 0;
          angular.forEach(component.columns, function(column, index) {
            // Get the maximum number of rows based on the number of components.
            maxRows = Math.max(maxRows, (column.components.length || 0));

            if (!tableChild) {
              // Add a header for each column.
              view += '<th>Column ' + (index + 1) + ' (' + component.key + ')</th>';
            }
          });

          if (!tableChild) {
            view += '</tr></thead>';
          }

          view += '<tbody>';
          for (var index = 0; index < maxRows; index++) {
            view += '<tr>';
            for (var col = 0; col < component.columns.length; col++) {
              view += GridUtils.columnForComponent(data, component.columns[col].components[index] || undefined, $interpolate, componentInfo, true);
            }
            view += '</tr>';
          }
          view += '</tbody></table>';
          return view;
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/columns.html',
        "<div class=\"row\">\r\n  <div ng-show=\"column.width\" class=\"col-sm-{{column.width}} col-sm-offset-{{column.offset}} col-sm-push-{{column.push}} col-sm-pull-{{column.pull}}\" ng-repeat=\"column in component.columns track by $index\">\r\n    <formio-component\r\n      ng-repeat=\"_component in column.components track by $index\"\r\n      component=\"_component\"\r\n      data=\"data\"\r\n      formio=\"formio\"\r\n      submission=\"submission\"\r\n      hide-components=\"hideComponents\"\r\n      ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n      formio-form=\"formioForm\"\r\n      read-only=\"isDisabled(_component, data)\"\r\n      grid-row=\"gridRow\"\r\n      grid-col=\"gridCol\"\r\n      builder=\"builder\"\r\n    ></formio-component>\r\n  </div>\r\n</div>\r\n"
      );

      $templateCache.put('formio/componentsView/columns.html',
        "<div class=\"row\">\r\n  <div ng-show=\"column.width\" ng-class=\"'col-sm-' + column.width + ' col-sm-offset-' + column.offset + ' col-sm-push-' + column.push + ' col-sm-pull-' + column.pull\" ng-repeat=\"column in component.columns track by $index\">\r\n    <formio-component-view\r\n      ng-repeat=\"_component in column.components track by $index\"\r\n      component=\"_component\"\r\n      data=\"data\"\r\n      form=\"form\"\r\n      submission=\"submission\"\r\n      ignore=\"ignore\"\r\n      ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n      builder=\"builder\"\r\n    ></formio-component-view>\r\n  </div>\r\n</div>\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],178:[function(_dereq_,module,exports){
"use strict";
module.exports = function(app) {
  app.provider('formioComponents', function() {
    var components = {};
    var groups = {
      __component: {
        title: 'Basic Components'
      },
      advanced: {
        title: 'Special Components'
      },
      layout: {
        title: 'Layout Components'
      }
    };
    return {
      addGroup: function(name, group) {
        groups[name] = group;
      },
      register: function(type, component, group) {
        if (!components[type]) {
          components[type] = component;
        }
        else {
          angular.extend(components[type], component);
        }

        // Set the type for this component.
        if (!components[type].group) {
          components[type].group = group || '__component';
        }
        components[type].settings.type = type;
      },
      $get: function() {
        return {
          components: components,
          groups: groups
        };
      }
    };
  });

  app.directive('safeMultipleToSingle', [function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function($scope, el, attrs, ngModel) {
        ngModel.$formatters.push(function(modelValue) {
          if (!$scope.component.multiple && Array.isArray(modelValue)) {
            return modelValue[0] || '';
          }

          return modelValue;
        });
      }
    };
  }]);
};

},{}],179:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('container', {
        title: 'Container',
        template: 'formio/components/container.html',
        viewTemplate: 'formio/componentsView/container.html',
        group: 'advanced',
        icon: 'fa fa-folder-open',
        tableView: function(data, component, $interpolate, componentInfo, tableChild) {
          var view = '<table class="table table-striped table-bordered table-child">';

          if (!tableChild) {
            view += '<thead><tr>';
            view += '<th>' + (component.label || '') + ' (' + component.key + ')</th>';
            view += '</tr></thead>';
          }

          view += '<tbody>';

          // Render a value for each column item.
          angular.forEach(component.components, function(component) {
            view += '<tr>' + GridUtils.columnForComponent(data, component, $interpolate, componentInfo, true) + '</tr>';
          });

          view += '</tbody></table>';
          return view;
        },
        settings: {
          input: true,
          tree: true,
          components: [],
          tableView: true,
          label: '',
          key: 'container',
          protected: false,
          persistent: true,
          clearOnHide: true
        }
      });
    }
  ]);
  app.controller('formioContainerComponent', [
    '$scope',
    function($scope) {
      $scope.data[$scope.component.key] = $scope.data[$scope.component.key] || {};
      $scope.parentKey = $scope.component.key;
    }
  ]);
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/container.html', FormioUtils.fieldWrap(
        "<div ng-controller=\"formioContainerComponent\" class=\"formio-container-component\">\r\n  <formio-component\r\n    ng-repeat=\"_component in component.components track by $index\"\r\n    component=\"_component\"\r\n    data=\"data[parentKey]\"\r\n    formio=\"formio\"\r\n    submission=\"submission\"\r\n    hide-components=\"hideComponents\"\r\n    ng-if=\"builder ? '::true' : isVisible(_component, data[parentKey])\"\r\n    formio-form=\"formioForm\"\r\n    read-only=\"isDisabled(_component, data[parentKey])\"\r\n    grid-row=\"gridRow\"\r\n    grid-col=\"gridCol\"\r\n    builder=\"builder\"\r\n  ></formio-component>\r\n</div>\r\n"
      ));
    }
  ]);
};

},{"../factories/GridUtils":222}],180:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('content', {
        title: 'Content',
        template: 'formio/components/content.html',
        settings: {
          key: 'content',
          input: false,
          html: ''
        },
        viewTemplate: 'formio/components/content.html'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/content.html',
        "<div ng-bind-html=\"component.html | safehtml | formioTranslate:component.key:builder\" id=\"{{ component.key }}\"></div>\r\n"
      );
    }
  ]);
};

},{}],181:[function(_dereq_,module,exports){
"use strict";


module.exports = function(app) {
  app.directive('currencyInput', function() {
    // May be better way than adding to prototype.
    var splice = function(string, idx, rem, s) {
      return (string.slice(0, idx) + s + string.slice(idx + Math.abs(rem)));
    };
    return {
      restrict: 'A',
      link: function(scope, element) {
        if (scope.builder) return;
        element.bind('keyup', function() {
          var data = scope.data[scope.component.key];

          //clearing left side zeros
          while (data.charAt(0) === '0') {
            data = data.substr(1);
          }

          data = data.replace(/[^\d.\',']/g, '');

          var point = data.indexOf('.');
          if (point >= 0) {
            data = data.slice(0, point + 3);
          }

          var decimalSplit = data.split('.');
          var intPart = decimalSplit[0];
          var decPart = decimalSplit[1];

          intPart = intPart.replace(/[^\d]/g, '');
          if (intPart.length > 3) {
            var intDiv = Math.floor(intPart.length / 3);
            while (intDiv > 0) {
              var lastComma = intPart.indexOf(',');
              if (lastComma < 0) {
                lastComma = intPart.length;
              }

              if (lastComma - 3 > 0) {
                intPart = splice(intPart, lastComma - 3, 0, ',');
              }
              intDiv--;
            }
          }

          if (decPart === undefined) {
            decPart = '';
          }
          else {
            decPart = '.' + decPart;
          }
          var res = intPart + decPart;
          scope.$apply(function() {
            scope.data[scope.component.key] = res;
          });
        });
      }
    };
  });
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('currency', {
        title: 'Currency',
        template: 'formio/components/currency.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          inputType: 'text',
          inputMask: '',
          label: '',
          key: 'currencyField',
          placeholder: '',
          prefix: '',
          suffix: '',
          defaultValue: '',
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
            multiple: '',
            custom: ''
          },
          conditional: {
            show: null,
            when: null,
            eq: ''
          }
        }
      });
    }
  ]);

  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/currency.html', FormioUtils.fieldWrap(
        "<input\r\n  type=\"{{ component.inputType }}\"\r\n  class=\"form-control\"\r\n  id=\"{{ componentId }}\"\r\n  name=\"{{ componentId }}\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n  ng-model=\"data[component.key]\"\r\n  ng-required=\"isRequired(component)\"\r\n  ng-disabled=\"readOnly\"\r\n  safe-multiple-to-single\r\n  ng-attr-placeholder=\"{{ component.placeholder }}\"\r\n  custom-validator=\"component.validate.custom\"\r\n  currency-input\r\n  ui-mask-placeholder=\"\"\r\n  ui-options=\"uiMaskOptions\"\r\n>\r\n"
      ));
    }
  ]);
};

},{}],182:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('custom', {
        title: 'Custom',
        template: 'formio/components/custom.html',
        group: 'advanced',
        settings: {},
        tableView: GridUtils.generic
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/custom.html',
        "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body text-muted text-center\">\r\n    Custom Component ({{ component.type }})\r\n  </div>\r\n</div>\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],183:[function(_dereq_,module,exports){
"use strict";

var formioUtils = _dereq_('formiojs/utils');

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('datagrid', {
        title: 'Data Grid',
        template: 'formio/components/datagrid.html',
        group: 'advanced',
        tableView: function(data, component, $interpolate, componentInfo, tableChild) {
          var view = '<table class="table table-striped table-bordered table-child">';

          if (!tableChild) {
            view += '<thead><tr>';
            angular.forEach(component.components, function(component) {
              view += '<th>' + (component.label || '') + ' (' + component.key + ')</th>';
            });
            view += '</tr></thead>';
          }

          view += '<tbody>';
          angular.forEach(data, function(row) {
            view += '<tr>';
            formioUtils.eachComponent(component.components, function(component) {
              // Don't render disabled fields, or fields with undefined data.
              if (!component.tableView || row[component.key] === undefined) {
                return;
              }

              // If the component has a defined tableView, use that, otherwise try and use the raw data as a string.
              var info = componentInfo.components.hasOwnProperty(component.type) ? componentInfo.components[component.type] : {};
              if (info.tableView) {
                // Reset the tableChild value for datagrids, so that components have headers.
                view += '<td>' + info.tableView(row[component.key] || '', component, $interpolate, componentInfo, false) + '</td>';
              }
              else {
                view += '<td>';
                if (component.prefix) {
                  view += component.prefix;
                }
                view += row[component.key] || '';
                if (component.suffix) {
                  view += ' ' + component.suffix;
                }
                view += '</td>';
              }
            });
            view += '</tr>';
          });
          view += '</tbody></table>';
          return view;
        },
        settings: {
          input: true,
          tree: true,
          components: [],
          tableView: true,
          label: '',
          key: 'datagrid',
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true
        }
      });
    }
  ]);
  app.controller('formioDataGrid', [
    '$scope',
    'FormioUtils',
    function($scope, FormioUtils) {
      if ($scope.builder) return;
      // Ensure each data grid has a valid data model.
      $scope.data = $scope.data || {};
      $scope.data[$scope.component.key] = $scope.data[$scope.component.key] || [{}];

      // Determine if any component is visible.
      $scope.anyVisible = function(component) {
        var data = $scope.data[$scope.component.key];
        var visible = false;
        angular.forEach(data, function(rowData) {
          visible = (visible || FormioUtils.isVisible(component, rowData, $scope.data, $scope.hideComponents));
        });
        return visible;
      };

      // Pull out the rows and cols for easy iteration.
      $scope.rows = $scope.data[$scope.component.key];
      // If less than minLength, add that many rows.
      if ($scope.component.validate && $scope.component.validate.hasOwnProperty('minLength') && $scope.rows.length < $scope.component.validate.minLength) {
        var toAdd = $scope.component.validate.minLength - $scope.rows.length;
        for (var i = 0; i < toAdd; i++) {
          $scope.rows.push({});
        }
      }
      // If more than maxLength, remove extra rows.
      if ($scope.component.validate && $scope.component.validate.hasOwnProperty('maxLength') && $scope.rows.length < $scope.component.validate.maxLength) {
        $scope.rows = $scope.rows.slice(0, $scope.component.validate.maxLength);
      }
      $scope.cols = $scope.component.components;
      $scope.localKeys = $scope.component.components.map(function(component) {
        return component.key;
      });

      // Add a row the to grid.
      $scope.addRow = function() {
        if (!Array.isArray($scope.rows)) {
          $scope.rows = [];
        }
        $scope.rows.push({});
      };

      // Remove a row from the grid.
      $scope.removeRow = function(index) {
        $scope.rows.splice(index, 1);
      };
    }
  ]);
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/datagrid.html', FormioUtils.fieldWrap(
        "<div class=\"formio-data-grid\" ng-controller=\"formioDataGrid\">\r\n  <table ng-class=\"{'table-striped': component.striped, 'table-bordered': component.bordered, 'table-hover': component.hover, 'table-condensed': component.condensed}\" class=\"table datagrid-table\">\r\n    <tr>\r\n      <th\r\n        ng-repeat=\"col in cols track by $index\"\r\n        ng-class=\"{'field-required': col.validate.required}\"\r\n        ng-if=\"builder ? '::true' : anyVisible(col)\"\r\n      >{{ col.label | formioTranslate:null:builder }}</th>\r\n    </tr>\r\n    <tr ng-repeat=\"row in rows track by $index\" ng-init=\"rowIndex = $index\">\r\n      <td ng-repeat=\"col in cols track by $index\" ng-init=\"col.hideLabel = true; colIndex = $index\" class=\"formio-data-grid-row\" ng-if=\"builder ? '::true' : anyVisible(col)\">\r\n        <formio-component\r\n          component=\"col\"\r\n          data=\"rows[rowIndex]\"\r\n          formio-form=\"formioForm\"\r\n          formio=\"formio\"\r\n          submission=\"submission\"\r\n          hide-components=\"hideComponents\"\r\n          ng-if=\"builder ? '::true' : isVisible(col, row)\"\r\n          read-only=\"isDisabled(col, row)\"\r\n          grid-row=\"rowIndex\"\r\n          grid-col=\"colIndex\"\r\n          builder=\"builder\"\r\n        ></formio-component>\r\n      </td>\r\n      <td ng-if=\"!component.hasOwnProperty('validate') || !component.validate.hasOwnProperty('minLength') || rows.length > component.validate.minLength\">\r\n        <a ng-click=\"removeRow(rowIndex)\" class=\"btn btn-default\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\"></span>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <div class=\"datagrid-add\" ng-if=\"!component.hasOwnProperty('validate') || !component.validate.hasOwnProperty('maxLength') || rows.length < component.validate.maxLength\">\r\n    <a ng-click=\"addRow()\" class=\"btn btn-primary\">\r\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> {{ component.addAnother || \"Add Another\" | formioTranslate:null:builder }}\r\n    </a>\r\n  </div>\r\n</div>\r\n"
      ));
    }
  ]);
};

},{"formiojs/utils":1}],184:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('datetime', {
        title: 'Date / Time',
        template: 'formio/components/datetime.html',
        tableView: function(data, component, $interpolate) {
          return $interpolate('<span>{{ "' + data + '" | date: "' + component.format + '" }}</span>')();
        },
        group: 'advanced',
        /* eslint-disable no-unused-vars */
        // NOTE: Do not delete the "moment" variable here. That is needed to make moment() work in default dates.
        controller: ['$scope', '$timeout', 'moment', function($scope, $timeout, moment) {
        /* eslint-enable no-unused-vars */
          // Close calendar pop up when tabbing off button
          $scope.onKeyDown = function(event) {
            return event.keyCode === 9 ? false : $scope.calendarOpen;
          };

          var dateValue = function() {
            // If the date is set, then return the true date value.
            if ($scope.data[$scope.component.key]) {
              return ($scope.data[$scope.component.key] instanceof Date) ? $scope.data[$scope.component.key] : new Date($scope.data[$scope.component.key]);
            }

            // See if a default date is set.
            if ($scope.component.defaultDate) {
              var defaultDate = new Date($scope.component.defaultDate);
              if (!defaultDate || isNaN(defaultDate.getDate())) {
                try {
                  defaultDate = new Date(eval($scope.component.defaultDate));
                }
                catch (e) {
                  defaultDate = '';
                }
              }

              if (defaultDate && !isNaN(defaultDate.getDate())) {
                return defaultDate;
              }
            }

            // Default to empty.
            return '';
          };

          // Ensure the date value is always a date object when loaded, then unbind the watch.
          $scope.$watch('data.' + $scope.component.key, function() {
            var newValue = dateValue();
            if (newValue) {
              $scope.data[$scope.component.key] = newValue;
            }
          });

          // Watch for changes to the meridian settings to synchronize the submissionGrid and component view.
          $scope.$watch('component.timePicker.showMeridian', function(update) {
            // Remove any meridian reference, because were not in 12 hr.
            if (!$scope.component.enableTime || !update) {
              $scope.component.format = $scope.component.format.replace(/ a/, '');
              return;
            }

            // If we're missing the meridian string and were in 12 hr, add it.
            if (update && $scope.component.format.indexOf(' a') === -1) {
              $scope.component.format += ' a';
            }
          });

          if (!$scope.component.datePicker.maxDate) {
            delete $scope.component.datePicker.maxDate;
          }
          else {
            var maxDate = new Date($scope.component.datePicker.maxDate);
            $scope.component.datePicker.maxDate = new Date(
              maxDate.getUTCFullYear(),
              maxDate.getUTCMonth(),
              maxDate.getUTCDate(),
              23,
              59,
              59,
              999
            );
          }

          if (!$scope.component.datePicker.minDate) {
            delete $scope.component.datePicker.minDate;
          }
          else {
            var minDate = new Date($scope.component.datePicker.minDate);
            $scope.component.datePicker.minDate = new Date(
              minDate.getUTCFullYear(),
              minDate.getUTCMonth(),
              minDate.getUTCDate(),
              0,
              0,
              0,
              0
            );
          }

          $scope.autoOpen = true;
          $scope.onClosed = function() {
            $scope.autoOpen = false;
            $timeout(function() {
              $scope.autoOpen = true;
            }, 250);
          };
        }],
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'datetimeField',
          placeholder: '',
          format: 'yyyy-MM-dd HH:mm a',
          enableDate: true,
          enableTime: true,
          defaultDate: '',
          datepickerMode: 'day',
          datePicker: {
            showWeeks: true,
            startingDay: 0,
            initDate: '',
            minMode: 'day',
            maxMode: 'year',
            yearRows: 4,
            yearColumns: 5,
            minDate: null,
            maxDate: null
          },
          timePicker: {
            hourStep: 1,
            minuteStep: 1,
            showMeridian: true,
            readonlyInput: false,
            mousewheel: true,
            arrowkeys: true
          },
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
            custom: ''
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/datetime.html', FormioUtils.fieldWrap(
        "<div class=\"input-group\">\r\n  <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    name=\"{{ componentId }}\"\r\n    id=\"{{ componentId }}\"\r\n    ng-focus=\"calendarOpen = autoOpen\"\r\n    ng-click=\"calendarOpen = true\"\r\n    ng-init=\"calendarOpen = false\"\r\n    ng-disabled=\"readOnly\"\r\n    ng-required=\"isRequired(component)\"\r\n    is-open=\"calendarOpen\"\r\n    datetime-picker=\"{{ component.format }}\"\r\n    datepicker-mode=\"component.datepickerMode\"\r\n    when-closed=\"onClosed()\"\r\n    custom-validator=\"component.validate.custom\"\r\n    enable-date=\"component.enableDate\"\r\n    enable-time=\"component.enableTime\"\r\n    ng-model=\"data[component.key]\"\r\n    tabindex=\"{{ component.tabindex || 0 }}\"\r\n    ng-attr-placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\"\r\n    datepicker-options=\"component.datePicker\"\r\n    timepicker-options=\"component.timePicker\"\r\n  />\r\n  <span class=\"input-group-btn\">\r\n    <button type=\"button\" ng-disabled=\"readOnly\" class=\"btn btn-default\" ng-click=\"calendarOpen = true\" ng-keydown=\"calendarOpen = onKeyDown($event)\">\r\n      <i ng-if=\"component.enableDate\" class=\"glyphicon glyphicon-calendar\"></i>\r\n      <i ng-if=\"!component.enableDate\" class=\"glyphicon glyphicon-time\"></i>\r\n    </button>\r\n  </span>\r\n</div>\r\n"
      ));
    }
  ]);
};

},{}],185:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.directive('dayPart', function() {
    return {
      restrict: 'A',
      replace: true,
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {
        if (scope.builder) return;
        var limitLength = attrs.characters || 2;
        scope.$watch(attrs.ngModel, function() {
          if (!ngModel.$viewValue) {
            return;
          }
          var render = false;
          if (ngModel.$viewValue.length > limitLength) {
            ngModel.$setViewValue(ngModel.$viewValue.substring(0, limitLength));
            render = true;
          }
          if (isNaN(ngModel.$viewValue)) {
            ngModel.$setViewValue(ngModel.$viewValue.replace(/\D/g,''));
            render = true;
          }
          if (
            parseInt(ngModel.$viewValue) < parseInt(attrs.min) ||
            parseInt(ngModel.$viewValue) > parseInt(attrs.max)
          ) {
            ngModel.$setViewValue(ngModel.$viewValue.substring(0, limitLength - 1));
            render = true;
          }
          if (render) {
            ngModel.$render();
          }
        });
      }
    };
  });
  app.directive('dayInput', function() {
    return {
      restrict: 'E',
      replace: true,
      require: 'ngModel',
      scope: {
        component: '=',
        componentId: '=',
        readOnly: '=',
        ngModel: '=',
        gridRow: '=',
        gridCol: '=',
        builder: '=?'
      },
      templateUrl: 'formio/components/day-input.html',
      controller: ['$scope', function($scope) {
        if ($scope.builder) return;
        $scope.months = [
          {value: '', label: $scope.component.fields.month.placeholder},
          {value: '01', label: 'January'},
          {value: '02', label: 'February'},
          {value: '03', label: 'March'},
          {value: '04', label: 'April'},
          {value: '05', label: 'May'},
          {value: '06', label: 'June'},
          {value: '07', label: 'July'},
          {value: '08', label: 'August'},
          {value: '09', label: 'September'},
          {value: '10', label: 'October'},
          {value: '11', label: 'November'},
          {value: '12', label: 'December'}
        ];

        $scope.date = {
          day: '',
          month: '',
          year: ''
        };
      }],
      link: function(scope, elem, attrs, ngModel) {
        if (scope.builder) return;
        // Set the scope values based on the current model.
        scope.$watch('ngModel', function() {
          // Only update on load.
          if (ngModel.$viewValue && !ngModel.$dirty) {
            var parts = typeof ngModel.$viewValue === 'string'
              ? ngModel.$viewValue.split('/')
              : ngModel.$viewValue;
            if ((parts instanceof Array) && parts.length === 3) {
              scope.date.day = parts[(scope.component.dayFirst ? 0 : 1)];
              scope.date.month = parts[(scope.component.dayFirst ? 1 : 0)];
              scope.date.year = parts[2];
            }
          }
        });

        var padLeft = function padLeft(nr, n, str) {
          nr = nr.toString();
          if (nr.length > n) {
            return nr.substr(0, n);
          }

          return Array((n - nr.length) + 1).join(str || '0') + nr;
        };

        scope.onChange = function() {
          var day = padLeft(scope.date.day, 2);
          var month = padLeft(scope.date.month, 2);
          var year = padLeft(scope.date.year, 4);
          var value = scope.component.dayFirst ? day : month;
          value += '/';
          value += scope.component.dayFirst ? month : day;
          value += '/' + year;
          ngModel.$setViewValue(value);
        };

        ngModel.$validators.day = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          var required = scope.component.fields.day.required || scope.component.fields.month.required || scope.component.fields.year.required;

          if (!required) {
            return true;
          }
          if (!value && required) {
            return false;
          }
          var parts = value.split('/');
          if (scope.component.fields.day.required) {
            if (parts[(scope.component.dayFirst ? 0 : 1)] === '00') {
              return false;
            }
          }
          if (scope.component.fields.month.required) {
            if (parts[(scope.component.dayFirst ? 1 : 0)] === '00') {
              return false;
            }
          }
          if (scope.component.fields.year.required) {
            if (parts[2] === '0000') {
              return false;
            }
          }
          return true;
        };
      }
    };
  });
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('day', {
        title: 'Day',
        template: 'formio/components/day.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'dayField',
          fields: {
            day: {
              type: 'text',
              placeholder: '',
              required: false
            },
            month: {
              type: 'select',
              placeholder: '',
              required: false
            },
            year: {
              type: 'text',
              placeholder: '',
              required: false
            }
          },
          dayFirst: false,
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            custom: ''
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/day.html', FormioUtils.fieldWrap(
        "<div class=\"day-input\">\r\n  <day-input\r\n    name=\"{{componentId}}\"\r\n    component-id=\"componentId\"\r\n    read-only=\"isDisabled(component, data)\"\r\n    component=\"component\"\r\n    ng-required=\"isRequired(component)\"\r\n    custom-validator=\"component.validate.custom\"\r\n    ng-model=\"data[component.key]\"\r\n    tabindex=\"{{ component.tabindex || 0 }}\"\r\n    builder=\"builder\"\r\n  ></day-input>\r\n</div>\r\n"
      ));
      $templateCache.put('formio/components/day-input.html',
        "<div class=\"daySelect form row\">\r\n  <div class=\"form-group col-xs-3\" ng-if=\"component.dayFirst && !component.fields.day.hide\">\r\n    <label for=\"{{componentId}}-day\" ng-class=\"{'field-required': component.fields.day.required}\">{{ \"Day\" | formioTranslate:null:builder }}</label>\r\n    <input\r\n      class=\"form-control\"\r\n      type=\"text\"\r\n      id=\"{{componentId}}-day\"\r\n      ng-model=\"date.day\"\r\n      ng-change=\"onChange()\"\r\n      style=\"padding-right: 10px;\"\r\n      ng-attr-placeholder=\"{{component.fields.day.placeholder}}\"\r\n      day-part\r\n      characters=\"2\"\r\n      min=\"0\"\r\n      max=\"31\"\r\n      ng-disabled=\"readOnly\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group col-xs-4\" ng-if=\"!component.fields.month.hide\">\r\n    <label for=\"{{componentId}}-month\" ng-class=\"{'field-required': component.fields.month.required}\">{{ \"Month\" | formioTranslate:null:builder }}</label>\r\n    <select\r\n      class=\"form-control\"\r\n      type=\"text\"\r\n      id=\"{{componentId}}-month\"\r\n      ng-model=\"date.month\"\r\n      ng-change=\"onChange()\"\r\n      ng-disabled=\"readOnly\"\r\n      ng-options=\"month.value as month.label | formioTranslate:null:builder for month in months\"\r\n    ></select>\r\n  </div>\r\n  <div class=\"form-group col-xs-3\" ng-if=\"!component.dayFirst && !component.fields.day.hide\">\r\n    <label for=\"{{componentId}}-day\" ng-class=\"{'field-required': component.fields.day.required}\">{{ \"Day\" | formioTranslate:null:builder }}</label>\r\n    <input\r\n      class=\"form-control\"\r\n      type=\"text\"\r\n      id=\"{{componentId}}-day1\"\r\n      ng-model=\"date.day\"\r\n      ng-change=\"onChange()\"\r\n      style=\"padding-right: 10px;\"\r\n      ng-attr-placeholder=\"{{component.fields.day.placeholder}}\"\r\n      day-part\r\n      characters=\"2\"\r\n      min=\"0\"\r\n      max=\"31\"\r\n      ng-disabled=\"readOnly\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group col-xs-5\" ng-if=\"!component.fields.year.hide\">\r\n    <label for=\"{{componentId}}-year\" ng-class=\"{'field-required': component.fields.year.required}\">{{ \"Year\" | formioTranslate:null:builder }}</label>\r\n    <input\r\n      class=\"form-control\"\r\n      type=\"text\"\r\n      id=\"{{componentId}}-year\"\r\n      ng-model=\"date.year\"\r\n      ng-change=\"onChange()\"\r\n      style=\"padding-right: 10px;\"\r\n      ng-attr-placeholder=\"{{component.fields.year.placeholder}}\"\r\n      characters=\"4\"\r\n      min=\"0\"\r\n      max=\"2100\"\r\n      ng-disabled=\"readOnly\"\r\n    />\r\n  </div>\r\n</div>\r\n"
      );
    }
  ]);
};

},{}],186:[function(_dereq_,module,exports){
"use strict";
module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('email', {
        title: 'Email',
        template: 'formio/components/textfield.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          inputType: 'email',
          label: '',
          key: 'emailField',
          placeholder: '',
          prefix: '',
          suffix: '',
          defaultValue: '',
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          kickbox: {
            enabled: false
          }
        }
      });
    }
  ]);
};

},{}],187:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('fieldset', {
        title: 'Field Set',
        template: 'formio/components/fieldset.html',
        group: 'layout',
        settings: {
          key: 'fieldset',
          input: false,
          tableView: false,
          legend: '',
          components: []
        },
        viewTemplate: 'formio/componentsView/fieldset.html',
        tableView: function(data, component, $interpolate, componentInfo, tableChild) {
          var view = '<table class="table table-striped table-bordered table-child">';

          if (!tableChild) {
            view += '<thead><tr>';
            view += '<th>Field Set (' + component.key + ')</th>';
            view += '</tr></thead>';
          }
          view += '<tbody>';
          angular.forEach(component.components, function(component) {
            view += '<tr>' + GridUtils.columnForComponent(data, component, $interpolate, componentInfo, true) + '</tr>';
          });

          view += '</tbody></table>';
          return view;
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/fieldset.html',
        "<fieldset id=\"{{ component.key }}\">\r\n  <legend ng-if=\"component.legend\">{{ component.legend | formioTranslate:null:builder }}</legend>\r\n  <formio-component\r\n    ng-repeat=\"_component in component.components track by $index\"\r\n    component=\"_component\"\r\n    data=\"data\"\r\n    formio=\"formio\"\r\n    submission=\"submission\"\r\n    hide-components=\"hideComponents\"\r\n    ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n    read-only=\"isDisabled(_component, data)\"\r\n    formio-form=\"formioForm\"\r\n    grid-row=\"gridRow\"\r\n    grid-col=\"gridCol\"\r\n    builder=\"builder\"\r\n  ></formio-component>\r\n</fieldset>\r\n"
      );

      $templateCache.put('formio/componentsView/fieldset.html',
        "<fieldset id=\"{{ component.key }}\">\r\n  <legend ng-if=\"component.legend\">{{ component.legend }}</legend>\r\n  <formio-component-view\r\n    ng-repeat=\"_component in component.components track by $index\"\r\n    component=\"_component\"\r\n    data=\"data\"\r\n    submission=\"submission\"\r\n    form=\"form\"\r\n    ignore=\"ignore\"\r\n    ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n    builder=\"builder\"\r\n  ></formio-component-view>\r\n</fieldset>\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],188:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('file', {
        title: 'File',
        template: 'formio/components/file.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'file',
          image: false,
          imageSize: '200',
          placeholder: '',
          multiple: false,
          defaultValue: '',
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true
        },
        viewTemplate: 'formio/componentsView/file.html'
      });
    }
  ]);

  app.directive('formioFileList', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        files: '=',
        form: '=',
        readOnly: '='
      },
      templateUrl: 'formio/components/formio-file-list.html',
      controller: [
        '$scope',
        function($scope) {
          if ($scope.builder) return;
          $scope.removeFile = function(event, index) {
            var component = $scope.$parent.component;
            if (component.storage === 'url') {
              $scope.$parent.formio.makeRequest('', component.url + '/' + $scope.files[index].name, 'delete');
            }
            event.preventDefault();
            $scope.files.splice(index, 1);
          };

          $scope.fileSize = function(a, b, c, d, e) {
            return (b = Math, c = b.log, d = 1024, e = c(a) / c(d) | 0, a / b.pow(d, e)).toFixed(2) + ' ' + (e ? 'kMGTPEZY'[--e] + 'B' : 'Bytes');
          };
        }
      ]
    };
  }]);

  app.directive('formioImageList', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        files: '=',
        form: '=',
        width: '=',
        readOnly: '='
      },
      templateUrl: 'formio/components/formio-image-list.html',
      controller: [
        '$scope',
        function($scope) {
          if ($scope.builder) return;
          $scope.removeFile = function(event, index) {
            var component = $scope.$parent.component;
            if (component.storage === 'url') {
              $scope.$parent.formio.makeRequest('', component.url + '/' + $scope.files[index].name, 'delete');
            }
            event.preventDefault();
            $scope.files.splice(index, 1);
          };
        }
      ]
    };
  }]);

  app.directive('formioFile', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        file: '=',
        form: '='
      },
      template: '<a href="{{ file.url }}" ng-click="getFile($event)" target="_blank">{{ file.name }}</a>',
      controller: [
        '$window',
        '$rootScope',
        '$scope',
        'Formio',
        function(
          $window,
          $rootScope,
          $scope,
          Formio
        ) {
          if ($scope.builder) return;
          $scope.getFile = function(evt) {
            evt.preventDefault();
            $scope.form = $scope.form || $rootScope.filePath;
            var formio = new Formio($scope.form);
            formio
              .downloadFile($scope.file).then(function(file) {
                if (file) {
                  $window.open(file.url, '_blank');
                }
              })
              .catch(function(response) {
                // Is alert the best way to do this?
                // User is expecting an immediate notification due to attempting to download a file.
                alert(response);
              });
          };
        }
      ]
    };
  }]);

  app.directive('formioImage', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        file: '=',
        form: '=',
        width: '='
      },
      template: '<img ng-src="{{ file.imageSrc }}" alt="{{ file.name }}" ng-style="{width: width}" />',
      controller: [
        '$rootScope',
        '$scope',
        'Formio',
        function(
          $rootScope,
          $scope,
          Formio
        ) {
          if ($scope.builder) return;
          $scope.form = $scope.form || $rootScope.filePath;
          var formio = new Formio($scope.form);
          formio.downloadFile($scope.file)
            .then(function(result) {
              $scope.file.imageSrc = result.url;
              $scope.$apply();
            });
        }
      ]
    };
  }]);

  app.controller('formioFileUpload', [
    '$scope',
    '$interpolate',
    'FormioUtils',
    function(
      $scope,
      $interpolate,
      FormioUtils
    ) {
      if ($scope.builder) return;
      $scope.fileUploads = {};
      $scope.removeUpload = function(index) {
        delete $scope.fileUploads[index];
      };

      // This fixes new fields having an empty space in the array.
      if ($scope.data && $scope.data[$scope.component.key] === '') {
        $scope.data[$scope.component.key] = [];
      }
      if ($scope.data && $scope.data[$scope.component.key] === undefined) {
        $scope.data[$scope.component.key] = [];
      }
      if ($scope.data && $scope.data[$scope.component.key] && $scope.data[$scope.component.key][0] === '') {
        $scope.data[$scope.component.key].splice(0, 1);
      }

      $scope.upload = function(files) {
        if ($scope.component.storage && files && files.length) {
          angular.forEach(files, function(file) {
            // Get a unique name for this file to keep file collisions from occurring.
            var fileName = FormioUtils.uniqueName(file.name);
            $scope.fileUploads[fileName] = {
              name: fileName,
              size: file.size,
              status: 'info',
              message: 'Starting upload'
            };
            var dir = $scope.component.dir || '';
            dir = $interpolate(dir)({data: $scope.data, row: $scope.row});
            var formio = null;
            if ($scope.formio) {
              formio = $scope.formio;
            }
            else {
              $scope.fileUploads[fileName].status = 'error';
              $scope.fileUploads[fileName].message = 'File Upload URL not provided.';
            }

            if (formio) {
              formio.uploadFile($scope.component.storage, file, fileName, dir, function processNotify(evt) {
                $scope.fileUploads[fileName].status = 'progress';
                $scope.fileUploads[fileName].progress = parseInt(100.0 * evt.loaded / evt.total);
                delete $scope.fileUploads[fileName].message;
                $scope.$apply();
              }, $scope.component.url)
                .then(function(fileInfo) {
                  delete $scope.fileUploads[fileName];
                  // Ensure that the file component is an array.
                  if (
                    !$scope.data[$scope.component.key] ||
                    !($scope.data[$scope.component.key] instanceof Array)
                  ) {
                    $scope.data[$scope.component.key] = [];
                  }
                  $scope.data[$scope.component.key].push(fileInfo);
                  $scope.$apply();
                })
                .catch(function(response) {
                  $scope.fileUploads[fileName].status = 'error';
                  $scope.fileUploads[fileName].message = response.data;
                  delete $scope.fileUploads[fileName].progress;
                  $scope.$apply();
                });
            }
          });
        }
      };
    }
  ]);
  app.run([
    '$templateCache',
    function(
      $templateCache
    ) {
      $templateCache.put('formio/components/formio-image-list.html',
        "<div>\r\n  <span ng-repeat=\"file in files track by $index\" ng-if=\"file\">\r\n    <formio-image file=\"file\" form=\"form\" width=\"width\"></formio-image>\r\n    <span ng-if=\"!readOnly\" style=\"width:1%;white-space:nowrap;\">\r\n      <a href=\"#\" ng-click=\"removeFile($event, $index)\" style=\"padding: 2px 4px;\" class=\"btn btn-sm btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n    </span>\r\n  </span>\r\n</div>\r\n"
      );

      $templateCache.put('formio/components/formio-file-list.html',
        "<table class=\"table table-striped table-bordered\">\r\n  <thead>\r\n    <tr>\r\n      <td ng-if=\"!readOnly\" style=\"width:1%;white-space:nowrap;\"></td>\r\n      <th>File Name</th>\r\n      <th>Size</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr ng-repeat=\"file in files track by $index\">\r\n      <td ng-if=\"!readOnly\" style=\"width:1%;white-space:nowrap;\"><a ng-if=\"!readOnly\" href=\"#\" ng-click=\"removeFile($event, $index)\" style=\"padding: 2px 4px;\" class=\"btn btn-sm btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></a></td>\r\n      <td><formio-file file=\"file\" form=\"form\"></formio-file></td>\r\n      <td>{{ fileSize(file.size) }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"
      );

      $templateCache.put('formio/components/file.html',
        "<label ng-if=\"component.label && !component.hideLabel\" for=\"{{ componentId }}\" class=\"control-label\" ng-class=\"{'field-required': isRequired(component)}\">{{ component.label | formioTranslate:null:builder }}</label>\r\n<span ng-if=\"!component.label && isRequired(component)\" class=\"glyphicon glyphicon-asterisk form-control-feedback field-required-inline\" aria-hidden=\"true\"></span>\r\n<div ng-controller=\"formioFileUpload\">\r\n  <formio-file-list files=\"data[component.key]\" form=\"formio.formUrl\" ng-if=\"!component.image\"></formio-file-list>\r\n  <formio-image-list files=\"data[component.key]\" form=\"formio.formUrl\" width=\"component.imageSize\" ng-if=\"component.image\"></formio-image-list>\r\n  <div ng-if=\"!readOnly && (component.multiple || (!component.multiple && !data[component.key].length))\">\r\n    <div ngf-drop=\"upload($files)\" class=\"fileSelector\" ngf-drag-over-class=\"'fileDragOver'\" ngf-multiple=\"component.multiple\" id=\"{{ componentId }}\" name=\"{{ componentId }}\"><span class=\"glyphicon glyphicon-cloud-upload\"></span>Drop files to attach, or <a style=\"cursor: pointer;\" ngf-select=\"upload($files)\" tabindex=\"{{ component.tabindex || 0 }}\" ngf-multiple=\"component.multiple\">browse</a>.</div>\r\n    <div ng-if=\"!component.storage\" class=\"alert alert-warning\">No storage has been set for this field. File uploads are disabled until storage is set up.</div>\r\n    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>\r\n  </div>\r\n  <div ng-repeat=\"fileUpload in fileUploads track by $index\" ng-class=\"{'has-error': fileUpload.status === 'error'}\" class=\"file\">\r\n    <div class=\"row\">\r\n      <div class=\"fileName control-label col-sm-10\">{{ fileUpload.name }} <span ng-click=\"removeUpload(fileUpload.name)\" class=\"glyphicon glyphicon-remove\"></span></div>\r\n      <div class=\"fileSize control-label col-sm-2 text-right\">{{ fileSize(fileUpload.size) }}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <span ng-if=\"fileUpload.status === 'progress'\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"{{fileUpload.progress}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:{{fileUpload.progress}}%\">\r\n              <span class=\"sr-only\">{{fileUpload.progress}}% Complete</span>\r\n            </div>\r\n          </div>\r\n        </span>\r\n        <div ng-if=\"!fileUpload.status !== 'progress'\" class=\"bg-{{ fileUpload.status }} control-label\">{{ fileUpload.message }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
      );

      $templateCache.put('formio/componentsView/file.html',
        "<label ng-if=\"component.label && !component.hideLabel\" for=\"{{ component.key }}\" class=\"control-label\" ng-class=\"{'field-required': component.validate.required}\">{{ component.label | formioTranslate:null:builder }}</label>\r\n<div ng-controller=\"formioFileUpload\">\r\n  <formio-file-list files=\"data[component.key]\" form=\"formUrl\" read-only=\"true\" ng-if=\"!component.image\"></formio-file-list>\r\n  <formio-image-list files=\"data[component.key]\" form=\"formUrl\" read-only=\"true\" width=\"component.imageSize\" ng-if=\"component.image\"></formio-image-list>\r\n</div>\r\n"
      );
    }
  ]);
};

},{}],189:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('form', {
        title: 'Form',
        template: 'formio/components/form.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          key: 'formField',
          src: '',
          reference: true,
          form: '',
          path: '',
          label: '',
          protected: false,
          unique: false,
          persistent: true
        },
        controller: ['$scope', 'FormioUtils', 'Formio', function($scope, FormioUtils, Formio) {
          var url = $scope.component.src;
          if ($scope.component.form) {
            url = '';
            if ($scope.component.project) {
              url += '/project/' + $scope.component.project;
            }
            else if ($scope.formio && $scope.formio.projectUrl) {
              url += $scope.formio.projectUrl;
            }
            url += '/form/' + $scope.component.form;
            url = (new Formio(url)).formUrl;
          }

          if ($scope.data[$scope.component.key] && $scope.data[$scope.component.key]._id) {
            url += '/submission/' + $scope.data[$scope.component.key]._id;
          }

          $scope.formFormio = new Formio(url);
          $scope.formFormio.loadForm().then(function(form) {
            $scope.componentForm = form;
          });

          var submitForm = function(scope, cb) {
            if (FormioUtils.getComponent(scope.activePage.components, $scope.component.key)) {
              $scope.formFormio.saveSubmission($scope.data[$scope.component.key]).then(function(sub) {
                angular.merge($scope.data[$scope.component.key], sub);
                cb();
              }, cb);
            }
            else {
              return cb();
            }
          };

          // Hook into the submit method.
          FormioUtils.hook($scope.component.key + ':submit', function(scope, data, cb) {
            submitForm(scope, cb);
          });

          // Hook into the nextpage method.
          FormioUtils.hook($scope.component.key + ':nextPage', function(scope, cb) {
            submitForm(scope, cb);
          });

          // See if we need to load the submission into scope.
          if (
            $scope.data[$scope.component.key] &&
            $scope.data[$scope.component.key]._id &&
            !$scope.data[$scope.component.key].data
          ) {
            $scope.formFormio.loadSubmission().then(function(submission) {
              angular.merge($scope.data[$scope.component.key], submission);
            });
          }

          // Make sure to hide the submit button on the loaded form.
          $scope.$on('formLoad', function(err, form) {
            FormioUtils.eachComponent(form.components, function(component) {
              if ((component.type === 'button') && (component.action === 'submit')) {
                component.hidden = true;
              }
            });
          });
        }],
        tableView: GridUtils.generic
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/form.html',
        "<i style=\"font-size: 2em;\" ng-if=\"!componentForm\" ng-class=\"{'formio-hidden': componentForm}\" class=\"formio-loading glyphicon glyphicon-refresh glyphicon-spin\"></i>\r\n<formio ng-if=\"componentForm\" form=\"componentForm\" submission=\"data[component.key]\"></formio>\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],190:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('hidden', {
        title: 'Hidden',
        template: 'formio/components/hidden.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          key: 'hiddenField',
          label: '',
          protected: false,
          unique: false,
          persistent: true
        },
        tableView: GridUtils.generic
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/hidden.html',
        "<input type=\"hidden\" id=\"{{ componentId }}\" name=\"{{ componentId }}\" ng-model=\"data[component.key]\">\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],191:[function(_dereq_,module,exports){
"use strict";


module.exports = function(app) {
  app.directive('formioHtmlElement', [
    '$sanitize',
    '$filter',
    function($sanitize, $filter) {
      return {
        restrict: 'E',
        scope: {
          component: '='
        },
        templateUrl: 'formio/components/htmlelement-directive.html',
        link: function($scope) {
          if ($scope.builder) return;
          var displayError = function(msg) {
            $scope.parseError = 'Invalid HTML: ' + msg.toString();
          };

          $scope.$watch('component', function createElement() {
            if (!$scope.component.tag) {
              return displayError('No tag given');
            }

            var element = angular.element('<' + $scope.component.tag + '>' + '</' + $scope.component.tag + '>');
            element.html($filter('formioTranslate')($scope.component.content));

            // Add the css classes if supplied.
            if ($scope.component.className) {
              element.attr('class', $scope.component.className);
            }

            angular.forEach($scope.component.attrs, function(attr) {
              if (!attr.attr) return;
              element.attr(attr.attr, attr.value);
            });

            try {
              $scope.html = $sanitize(element.prop('outerHTML'));
              $scope.parseError = null;

              // If the sanitized html is empty, it was invalid; Create a visible error so we still render something.
              if (!$scope.html) {
                return displayError(element.prop('outerHTML'));
              }
            }
            catch (err) {
              // Isolate the message and store it.
              $scope.parseError = err.message
                .split('\n')[0]
                .replace('[$sanitize:badparse]', '');
            }
          }, true);
        }
      };
  }]);

  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('htmlelement', {
        title: 'HTML Element',
        template: 'formio/components/htmlelement.html',
        viewTemplate: 'formio/components/htmlelement.html',
        settings: {
          key: 'html',
          input: false,
          tag: 'p',
          attrs: [],
          className: '',
          content: ''
        }
      });
    }
  ]);

  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/htmlelement.html',
        '<formio-html-element component="component"></div>'
      );

      $templateCache.put('formio/components/htmlelement-directive.html',
        "<div id=\"{{ component.key }}\">\r\n  <div class=\"alert alert-warning\" ng-if=\"parseError\">{{ parseError }}</div>\r\n  <div ng-bind-html=\"html\"></div>\r\n</div>\r\n"
      );
    }
  ]);
};

},{}],192:[function(_dereq_,module,exports){
"use strict";
var app = angular.module('formio');

// Basic
_dereq_('./components')(app);
_dereq_('./textfield')(app);
_dereq_('./number')(app);
_dereq_('./password')(app);
_dereq_('./textarea')(app);
_dereq_('./checkbox')(app);
_dereq_('./selectboxes')(app);
_dereq_('./select')(app);
_dereq_('./radio')(app);
_dereq_('./htmlelement')(app);
_dereq_('./content')(app);
_dereq_('./button')(app);

// Special
_dereq_('./email')(app);
_dereq_('./phonenumber')(app);
_dereq_('./address')(app);
_dereq_('./datetime')(app);
_dereq_('./day')(app);
_dereq_('./time')(app);
_dereq_('./currency')(app);
_dereq_('./hidden')(app);
_dereq_('./resource')(app);
_dereq_('./file')(app);
_dereq_('./form')(app);
_dereq_('./signature')(app);
_dereq_('./custom')(app);
_dereq_('./container')(app);
_dereq_('./datagrid')(app);
_dereq_('./survey')(app);

// Layout
_dereq_('./columns')(app);
_dereq_('./fieldset')(app);
_dereq_('./page')(app);
_dereq_('./panel')(app);
_dereq_('./table')(app);
_dereq_('./well')(app);

},{"./address":174,"./button":175,"./checkbox":176,"./columns":177,"./components":178,"./container":179,"./content":180,"./currency":181,"./custom":182,"./datagrid":183,"./datetime":184,"./day":185,"./email":186,"./fieldset":187,"./file":188,"./form":189,"./hidden":190,"./htmlelement":191,"./number":193,"./page":194,"./panel":195,"./password":196,"./phonenumber":197,"./radio":198,"./resource":199,"./select":200,"./selectboxes":201,"./signature":202,"./survey":203,"./table":204,"./textarea":205,"./textfield":206,"./time":207,"./well":208}],193:[function(_dereq_,module,exports){
"use strict";


module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      var isNumeric = function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      };
      formioComponentsProvider.register('number', {
        title: 'Number',
        template: 'formio/components/number.html',
        settings: {
          input: true,
          tableView: true,
          inputType: 'number',
          label: '',
          key: 'numberField',
          placeholder: '',
          prefix: '',
          suffix: '',
          defaultValue: '',
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
            min: '',
            max: '',
            step: 'any',
            integer: '',
            multiple: '',
            custom: ''
          }
        },
        controller: ['$scope', function($scope) {
          if ($scope.builder) return; // FOR-71 - Skip parsing input data.

          // Ensure that values are numbers.
          if (
            $scope.data &&
            $scope.data.hasOwnProperty($scope.component.key) &&
            !isNumeric($scope.data[$scope.component.key])
          ) {
            $scope.data[$scope.component.key] = parseFloat($scope.data[$scope.component.key]);
          }
        }]
      });
    }
  ]);

  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/number.html', FormioUtils.fieldWrap(
        "<input\r\n  type=\"number\"\r\n  class=\"form-control\"\r\n  id=\"{{ componentId }}\"\r\n  name=\"{{ componentId }}\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n  ng-model=\"data[component.key]\"\r\n  ng-required=\"isRequired(component)\"\r\n  ng-disabled=\"readOnly\"\r\n  safe-multiple-to-single\r\n  ng-attr-min=\"{{ component.validate.min }}\"\r\n  ng-attr-max=\"{{ component.validate.max }}\"\r\n  ng-attr-step=\"{{ component.validate.step }}\"\r\n  ng-attr-placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\"\r\n  custom-validator=\"component.validate.custom\"\r\n  ui-mask=\"{{ component.inputMask }}\"\r\n  ui-mask-placeholder=\"\"\r\n  ui-options=\"uiMaskOptions\"\r\n>\r\n"
      ));
    }
  ]);
};

},{}],194:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('page', {
        template: 'formio/components/page.html',
        settings: {
          key: 'page',
          input: false,
          components: []
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/page.html',
        "<formio-component\r\n  ng-repeat=\"_component in component.components track by $index\"\r\n  component=\"_component\"\r\n  data=\"data\"\r\n  formio=\"formio\"\r\n  submission=\"submission\"\r\n  hide-components=\"hideComponents\"\r\n  ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n  read-only=\"isDisabled(_component, data)\"\r\n  formio-form=\"formioForm\"\r\n  grid-row=\"gridRow\"\r\n  grid-col=\"gridCol\"\r\n  builder=\"builder\"\r\n></formio-component>\r\n"
      );
    }
  ]);
};

},{}],195:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('panel', {
        title: 'Panel',
        template: 'formio/components/panel.html',
        group: 'layout',
        settings: {
          key: 'panel',
          input: false,
          title: '',
          theme: 'default',
          tableView: false,
          components: []
        },
        viewTemplate: 'formio/componentsView/panel.html',
        tableView: function(data, component, $interpolate, componentInfo, tableChild) {
          var view = '<table class="table table-striped table-bordered table-child">';

          if (!tableChild) {
            view += '<thead><tr>';
            view += '<th>Panel (' + component.key + ')</th>';
            view += '</tr></thead>';
          }
          view += '<tbody>';
          angular.forEach(component.components, function(component) {
            view += '<tr>' + GridUtils.columnForComponent(data, component, $interpolate, componentInfo, true) + '</tr>';
          });

          view += '</tbody></table>';
          return view;
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/panel.html',
        "<div class=\"panel panel-{{ component.theme }}\" id=\"{{ component.key }}\">\r\n  <div ng-if=\"component.title\" class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">{{ component.title | formioTranslate:null:builder }}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <formio-component\r\n      ng-repeat=\"_component in component.components track by $index\"\r\n      component=\"_component\"\r\n      data=\"data\"\r\n      formio=\"formio\"\r\n      submission=\"submission\"\r\n      hide-components=\"hideComponents\"\r\n      ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n      read-only=\"isDisabled(_component, data)\"\r\n      formio-form=\"formioForm\"\r\n      grid-row=\"gridRow\"\r\n      grid-col=\"gridCol\"\r\n      builder=\"builder\"\r\n    ></formio-component>\r\n  </div>\r\n</div>\r\n"
      );

      $templateCache.put('formio/componentsView/panel.html',
        "<div class=\"panel panel-{{ component.theme }}\" id=\"{{ component.key }}\">\r\n  <div ng-if=\"component.title\" class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">{{ component.title }}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <formio-component-view\r\n      ng-repeat=\"_component in component.components track by $index\"\r\n      component=\"_component\"\r\n      data=\"data\"\r\n      submission=\"submission\"\r\n      form=\"form\"\r\n      ignore=\"ignore\"\r\n      ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n      builder=\"builder\"\r\n    ></formio-component-view>\r\n  </div>\r\n</div>\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],196:[function(_dereq_,module,exports){
"use strict";
module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('password', {
        title: 'Password',
        template: 'formio/components/textfield.html',
        tableView: function() {
          return '--- PROTECTED ---';
        },
        settings: {
          input: true,
          tableView: false,
          inputType: 'password',
          label: '',
          key: 'passwordField',
          placeholder: '',
          prefix: '',
          suffix: '',
          protected: true,
          persistent: true,
          hidden: false,
          clearOnHide: true
        }
      });
    }
  ]);
};

},{}],197:[function(_dereq_,module,exports){
"use strict";
module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('phoneNumber', {
        title: 'Phone Number',
        template: 'formio/components/textfield.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          inputMask: '(999) 999-9999',
          label: '',
          key: 'phonenumberField',
          placeholder: '',
          prefix: '',
          suffix: '',
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          defaultValue: '',
          clearOnHide: true,
          validate: {
            required: false
          }
        }
      });
    }
  ]);
};

},{}],198:[function(_dereq_,module,exports){
"use strict";


module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('radio', {
        title: 'Radio',
        template: 'formio/components/radio.html',
        tableView: function(data, component) {
          for (var i in component.values) {
            if (component.values[i].value === data) {
              return component.values[i].label;
            }
          }
          return data;
        },
        settings: {
          input: true,
          tableView: true,
          inputType: 'radio',
          label: '',
          key: 'radioField',
          values: [],
          defaultValue: '',
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
            custom: '',
            customPrivate: false
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/radio.html', FormioUtils.fieldWrap(
        "<ng-form name=\"{{ componentId }}\" ng-model=\"data[component.key]\" custom-validator=\"component.validate.custom\">\r\n  <div ng-class=\"component.inline ? 'radio-inline' : 'radio'\" ng-repeat=\"v in component.values track by $index\">\r\n    <label class=\"control-label\" for=\"{{ componentId }}-{{ v.value }}\">\r\n      <input\r\n        type=\"{{ component.inputType }}\"\r\n        id=\"{{ componentId }}-{{ v.value }}\"\r\n        value=\"{{ v.value }}\"\r\n        tabindex=\"{{ component.tabindex || 0 }}\"\r\n        ng-model=\"data[component.key]\"\r\n        ng-required=\"isRequired(component)\"\r\n        custom-validator=\"component.validate.custom\"\r\n        ng-disabled=\"readOnly\"\r\n      >\r\n      {{ v.label | formioTranslate:null:builder }}\r\n    </label>\r\n  </div>\r\n</ng-form>\r\n"
      ));
    }
  ]);
};

},{}],199:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('resource', {
        title: 'Resource',
        tableView: function(data, component, $interpolate) {
          if ($interpolate) {
            return $interpolate(component.template)({item: data});
          }

          return data ? data._id : '';
        },
        template: function($scope) {
          return $scope.component.multiple ? 'formio/components/resource-multiple.html' : 'formio/components/resource.html';
        },
        controller: ['$scope', 'Formio', 'ngDialog', function($scope, Formio, ngDialog) {
          if ($scope.builder) return;
          var settings = $scope.component;
          var params = settings.params || {};
          $scope.selectItems = [];
          $scope.hasNextPage = false;
          $scope.resourceLoading = false;
          params.limit = 100;
          params.skip = 0;
          if (settings.multiple) {
            settings.defaultValue = [];
          }
          if (settings.resource) {
            var url = '';
            if (settings.project) {
              url += '/project/' + settings.project;
            }
            else if ($scope.formio && $scope.formio.projectUrl) {
              url += $scope.formio.projectUrl;
            }
            url += '/form/' + settings.resource;
            var formio = new Formio(url);

            // Refresh the items.
            $scope.refreshSubmissions = function(input, append) {
              if ($scope.resourceLoading) {
                return;
              }
              $scope.resourceLoading = true;
              // If they wish to return only some fields.
              if (settings.selectFields) {
                params.select = settings.selectFields;
              }
              if (settings.searchFields && input) {
                angular.forEach(settings.searchFields, function(field) {
                  params[field] = input;
                });
              }

              // Load the submissions.
              formio.loadSubmissions({
                params: params
              }).then(function(submissions) {
                submissions = submissions || [];
                if (append) {
                  $scope.selectItems = $scope.selectItems.concat(submissions);
                }
                else {
                  $scope.selectItems = submissions;
                }
                $scope.hasNextPage = (submissions.length >= params.limit) && ($scope.selectItems.length < submissions.serverCount);
              })['finally'](function() {
                $scope.resourceLoading = false;
              });
            };

            // Load more items.
            $scope.loadMoreItems = function($select, $event) {
              $event.stopPropagation();
              $event.preventDefault();
              params.skip += params.limit;
              $scope.refreshSubmissions(null, true);
            };

            $scope.refreshSubmissions();

            // Add a new resource.
            $scope.newResource = function() {
              var template  = '<br>' +
                              '<div class="row">' +
                                '<div class="col-sm-12">' +
                                  '<div class="panel panel-default">' +
                                    '<div class="panel-heading">' +
                                      '<h3 class="panel-title">{{ component.addResourceLabel || "Add Resource" | formioTranslate}}</h3>' +
                                    '</div>' +
                                    '<div class="panel-body">' +
                                      '<formio src="formUrl"></formio>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>';

              ngDialog.open({
                template: template,
                plain: true,
                scope: $scope,
                controller: ['$scope', function($scope) {
                  $scope.formUrl = $scope.formio.formsUrl + '/' + $scope.component.resource;

                  // Bind when the form is loaded.
                  $scope.$on('formLoad', function(event) {
                    event.stopPropagation(); // Don't confuse app
                  });

                  // Bind when the form is submitted.
                  $scope.$on('formSubmission', function(event, submission) {
                    var component = $scope.component;
                    var data      = $scope.data;

                    if (component.multiple) {
                      data[component.key].push(submission);
                    }
                    else {
                      data[component.key] = submission;
                    }

                    $scope.refreshSubmissions();
                    $scope.closeThisDialog(submission);
                  });
                }]
              }).closePromise.then(function(/*e*/) {
              //var cancelled = e.value === false || e.value === '$closeButton' || e.value === '$document';
              });
            };

            // Close all open dialogs on state change (using UI-Router).
            $scope.$on('$stateChangeStart', function() {
              ngDialog.closeAll(false);
            });

            // Close all open dialogs on route change (using ngRoute).
            $scope.$on('$routeChangeStart', function() {
              ngDialog.closeAll(false);
            });
          }
        }],
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'resourceField',
          placeholder: '',
          resource: '',
          project: '',
          defaultValue: '',
          template: '<span>{{ item.data }}</span>',
          selectFields: '',
          searchFields: '',
          multiple: false,
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false
          },
          defaultPermission: ''
        }
      });
    }
  ]);

  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/resource.html',
        "<div ng-if=\"!component.addResource\">\r\n  <label ng-if=\"component.label && !component.hideLabel\" for=\"{{ componentId }}\" class=\"control-label\" ng-class=\"{'field-required': isRequired(component)}\">{{ component.label | formioTranslate:null:builder }}</label>\r\n  <span ng-if=\"!component.label && isRequired(component)\" class=\"glyphicon glyphicon-asterisk form-control-feedback field-required-inline\" aria-hidden=\"true\"></span>\r\n  <ui-select ui-select-required safe-multiple-to-single ui-select-open-on-focus ng-model=\"data[component.key]\" ng-disabled=\"readOnly\" ng-required=\"isRequired(component)\" id=\"{{ componentId }}\" name=\"{{ componentId }}\" theme=\"bootstrap\" tabindex=\"{{ component.tabindex || 0 }}\">\r\n    <ui-select-match class=\"ui-select-match\" placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\">\r\n      <formio-select-item template=\"component.template\" item=\"$item || $select.selected\" select=\"$select\"></formio-select-item>\r\n    </ui-select-match>\r\n    <ui-select-choices class=\"ui-select-choices\" repeat=\"item in selectItems | filter: $select.search\" refresh=\"refreshSubmissions($select.search)\" refresh-delay=\"250\">\r\n      <formio-select-item template=\"component.template\" item=\"item\" select=\"$select\"></formio-select-item>\r\n      <button ng-if=\"hasNextPage && ($index == $select.items.length-1)\" class=\"btn btn-success btn-block\" ng-click=\"loadMoreItems($select, $event)\" ng-disabled=\"resourceLoading\">Load more...</button>\r\n    </ui-select-choices>\r\n  </ui-select>\r\n  <formio-errors ng-if=\"::!builder\"></formio-errors>\r\n</div>\r\n<div ng-if=\"component.addResource\">\r\n  <table class=\"table table-bordered\">\r\n    <label ng-if=\"component.label && !component.hideLabel\" for=\"{{ componentId }}\" class=\"control-label\" ng-class=\"{'field-required': isRequired(component)}\">{{ component.label | formioTranslate:null:builder }}</label>\r\n    <span ng-if=\"!component.label && isRequired(component)\" class=\"glyphicon glyphicon-asterisk form-control-feedback field-required-inline\" aria-hidden=\"true\"></span>\r\n    <tr>\r\n      <td>\r\n        <ui-select ui-select-required safe-multiple-to-single ui-select-open-on-focus ng-model=\"data[component.key]\" ng-disabled=\"readOnly\" ng-required=\"isRequired(component)\" id=\"{{ componentId }}\" name=\"{{ componentId }}\" theme=\"bootstrap\" tabindex=\"{{ component.tabindex || 0 }}\">\r\n          <ui-select-match class=\"ui-select-match\" placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\">\r\n            <formio-select-item template=\"component.template\" item=\"$item || $select.selected\" select=\"$select\"></formio-select-item>\r\n          </ui-select-match>\r\n          <ui-select-choices class=\"ui-select-choices\" repeat=\"item in selectItems | filter: $select.search\" refresh=\"refreshSubmissions($select.search)\" refresh-delay=\"250\">\r\n            <formio-select-item template=\"component.template\" item=\"item\" select=\"$select\"></formio-select-item>\r\n            <button ng-if=\"hasNextPage && ($index == $select.items.length-1)\" class=\"btn btn-success btn-block\" ng-click=\"loadMoreItems($select, $event)\" ng-disabled=\"resourceLoading\">Load more...</button>\r\n          </ui-select-choices>\r\n        </ui-select>\r\n        <formio-errors ng-if=\"::!builder\"></formio-errors>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <a ng-click=\"newResource()\" class=\"btn btn-primary\">\r\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> {{ component.addResourceLabel || \"Add Resource\" | formioTranslate:null:builder}}\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"
      );

      // Change the ui-select to ui-select multiple.
      $templateCache.put('formio/components/resource-multiple.html',
        $templateCache.get('formio/components/resource.html').replace(/<ui-select\s/g, '<ui-select multiple ')
      );
    }
  ]);
};

},{}],200:[function(_dereq_,module,exports){
"use strict";
/*eslint max-depth: ["error", 6]*/

var _get = _dereq_('lodash/get');
var _isEqual = _dereq_('lodash/isEqual');
var _assign = _dereq_('lodash/assign');
var _set = _dereq_('lodash/set');
var _cloneDeep = _dereq_('lodash/cloneDeep');
module.exports = function(app) {
  app.directive('formioSelectItem', [
    '$compile',
    function($compile) {
      return {
        restrict: 'E',
        scope: {
          template: '=',
          item: '=',
          select: '='
        },
        link: function(scope, element) {
          if (scope.builder) return;
          if (scope.template) {
            element.append($compile(angular.element(scope.template))(scope));
          }
        }
      };
    }
  ]);

  app.directive('uiSelectRequired', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        if (scope.builder) return;
        var oldIsEmpty = ngModel.$isEmpty;
        ngModel.$isEmpty = function(value) {
          return (Array.isArray(value) && value.length === 0) || oldIsEmpty(value);
        };
      }
    };
  });

  // A directive to have ui-select open on focus
  app.directive('uiSelectOpenOnFocus', [function() {
    return {
      require: 'uiSelect',
      restrict: 'A',
      link: function($scope, el, attrs, uiSelect) {
        if ($scope.builder) return;
        var focuscount = -1;

        angular.element(uiSelect.focusser).on('focus', function() {
          if (focuscount-- < 0) {
            uiSelect.activate();
          }
        });

        // Disable the auto open when this select element has been activated.
        $scope.$on('uis:activate', function() {
          focuscount = 1;
        });

        // Re-enable the auto open after the select element has been closed
        $scope.$on('uis:close', function() {
          focuscount = 1;
        });
      }
    };
  }]);

  // Configure the Select component.
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('select', {
        title: 'Select',
        template: function($scope) {
          return $scope.component.multiple ? 'formio/components/select-multiple.html' : 'formio/components/select.html';
        },
        tableView: function(data, component, $interpolate) {
          var getItem = function(data) {
            switch (component.dataSrc) {
              case 'values':
                component.data.values.forEach(function(item) {
                  if (item.value === data) {
                    data = item;
                  }
                });
                return data;
              case 'json':
                if (component.valueProperty) {
                  var selectItems;
                  try {
                    selectItems = angular.fromJson(component.data.json);
                  }
                  catch (error) {
                    selectItems = [];
                  }
                  selectItems.forEach(function(item) {
                    if (item[component.valueProperty] === data) {
                      data = item;
                    }
                  });
                }
                return data;
              // TODO: implement url and resource view.
              case 'url':
              case 'resource':
              default:
                return data;
            }
          };
          if (component.multiple && Array.isArray(data)) {
            return data.map(getItem).reduce(function(prev, item) {
              var value;
              if (typeof item === 'object') {
                value = $interpolate(component.template)({item: item});
              }
              else {
                value = item;
              }
              return (prev === '' ? '' : ', ') + value;
            }, '');
          }
          else {
            var item = getItem(data);
            var value;
            if (typeof item === 'object') {
              value = $interpolate(component.template)({item: item});
            }
            else {
              value = item;
            }
            return value;
          }
        },
        controller: [
          '$rootScope',
          '$scope',
          '$http',
          'Formio',
          '$interpolate',
          '$q',
          '$timeout',
          function(
            $rootScope,
            $scope,
            $http,
            Formio,
            $interpolate,
            $q,
            $timeout
          ) {
            // FOR-71 - Skip functionality in the builder view.
            if ($scope.builder) return;
            var settings = $scope.component;
            var options = {};
            $scope.nowrap = true;
            $scope.hasNextPage = false;
            $scope.selectItems = [];

            var initialized = $q.defer();
            initialized.promise.then(function() {
              $scope.$emit('selectLoaded', $scope.component);
            });

            var selectValues = $scope.component.selectValues;
            var valueProp = $scope.component.valueProperty;
            $scope.getSelectItem = function(item) {
              if (!item) {
                return '';
              }
              if (settings.dataSrc === 'values') {
                return item.value;
              }

              // Get the item value.
              var itemValue = valueProp ? _get(item, valueProp) : item;
              if (itemValue === undefined) {
                /* eslint-disable no-console */
                console.warn('Cannot find value property within select: ' + valueProp);
                /* eslint-enable no-console */
              }
              return itemValue;
            };

            $scope.refreshItems = function() {
              return $q.resolve([]);
            };
            $scope.$on('refreshList', function(event, url, input) {
              $scope.refreshItems(input, url);
            });

            var refreshing = false;
            var refreshValue = function() {
              if (refreshing) {
                return;
              }
              refreshing = true;
              var tempData = $scope.data[settings.key];
              $scope.data[settings.key] = settings.multiple ? [] : '';
              if (!settings.clearOnRefresh) {
                $timeout(function() {
                  $scope.data[settings.key] = tempData;
                  refreshing = false;
                  $scope.$emit('selectLoaded', $scope.component);
                });
              }
              else {
                refreshing = false;
                $scope.$emit('selectLoaded', $scope.component);
              }
            };

            // Ensures that the value is within the select items.
            var ensureValue = function() {
              var value = $scope.data[settings.key];
              if (!value || (Array.isArray(value) && value.length === 0)) {
                return;
              }
              // Iterate through the list of items and see if our value exists...
              var found = false;
              for (var i=0; i < $scope.selectItems.length; i++) {
                var item = $scope.selectItems[i];
                var selectItem = $scope.getSelectItem(item);
                if (_isEqual(selectItem, value)) {
                  found = true;
                  break;
                }
              }

              // If the item is not found in the select items array, then add it manually.
              if (!found) {
                var itemValue = value;
                if (valueProp) {
                  itemValue = {};
                  _set(itemValue, valueProp, value);
                }
                $scope.selectItems.push(itemValue);
              }
            };

            // Refresh the items when ready.
            var refreshItemsWhenReady = function() {
              initialized.promise.then(function() {
                var refreshPromise = $scope.refreshItems(true);
                if (refreshPromise) {
                  refreshPromise.then(refreshValue);
                }
                else {
                  refreshValue();
                }
              });
            };

            // Add a watch if they wish to refresh on selection of another field.
            if (settings.refreshOn) {
              if (settings.refreshOn === 'data') {
                $scope.$watch('data', refreshItemsWhenReady, true);
                return;
              }

              $scope.$watch('data.' + settings.refreshOn, refreshItemsWhenReady);
              $scope.$watch('submission.data.' + settings.refreshOn, refreshItemsWhenReady);
            }
            else {
              // Watch for the data to be set, and ensure the value is set properly.
              var dataWatch = $scope.$watch('data.' + settings.key, function(value) {
                if (value) {
                  initialized.promise.then(function() {
                    dataWatch();
                    ensureValue();
                    refreshValue();
                  });
                }
              });
            }

            var lastInput;
            switch (settings.dataSrc) {
              case 'values':
                $scope.selectItems = settings.data.values;
                initialized.resolve();
                break;
              case 'json':
                var items;

                // Set the new result.
                var setResult = function(data, append) {
                  // coerce the data into an array.
                  if (!(data instanceof Array)) {
                    data = [data];
                  }

                  if (data.length < options.params.limit) {
                    $scope.hasNextPage = false;
                  }
                  if (append) {
                    $scope.selectItems = $scope.selectItems.concat(data);
                  }
                  else {
                    $scope.selectItems = data;
                  }
                };

                try {
                  if (typeof $scope.component.data.json === 'string') {
                    items = angular.fromJson($scope.component.data.json);
                  }
                  else if (typeof $scope.component.data.json === 'object') {
                    items = $scope.component.data.json;
                  }
                  else {
                    items = [];
                  }

                  if (selectValues) {
                    // Allow dot notation in the selectValue property.
                    if (selectValues.indexOf('.') !== -1) {
                      var parts = selectValues.split('.');
                      var select = items;
                      for (var i in parts) {
                        select = select[parts[i]];
                      }
                      items = select;
                    }
                    else {
                      items = items[selectValues];
                    }
                  }
                }
                catch (error) {
                  /* eslint-disable no-console */
                  console.warn('Error parsing JSON in ' + $scope.component.key, error);
                  /* eslint-enable no-console */
                  items = [];
                }
                options.params = {
                  limit: $scope.component.limit || 20,
                  skip: 0
                };

                $scope.refreshItems = function(input, url, append) {
                  // If they typed in a search, reset skip.
                  if (lastInput !== input) {
                    lastInput = input;
                    options.params.skip = 0;
                  }
                  var selectItems = items;
                  if (input) {
                    selectItems = selectItems.filter(function(item) {
                      // Get the visible string from the interpolated item.
                      var value = $interpolate($scope.component.template)({item: item}).replace(/<(?:.|\n)*?>/gm, '');
                      switch ($scope.component.filter) {
                        case 'startsWith':
                          return value.toLowerCase().indexOf(input.toLowerCase()) !== -1;
                        case 'contains':
                        default:
                          return value.toLowerCase().lastIndexOf(input.toLowerCase(), 0) === 0;
                      }
                    });
                  }
                  options.params.skip = parseInt(options.params.skip, 10);
                  options.params.limit = parseInt(options.params.limit, 10);
                  selectItems = selectItems.slice(options.params.skip, options.params.skip + options.params.limit);
                  setResult(selectItems, append);
                  return initialized.resolve($scope.selectItems);
                };
                $scope.refreshItems();
                break;
              case 'custom':
                $scope.refreshItems = function() {
                  try {
                    /* eslint-disable no-unused-vars */
                    var data = _cloneDeep($scope.submission.data);
                    var row = _cloneDeep($scope.data);
                    /* eslint-enable no-unused-vars */
                    $scope.selectItems = eval('(function(data, row) { var values = [];' + settings.data.custom.toString() + '; return values; })(data, row)');
                  }
                  catch (error) {
                    $scope.selectItems = [];
                  }
                  return initialized.resolve($scope.selectItems);
                };
                $scope.refreshItems();
                break;
              case 'url':
              case 'resource':
                var url = '';
                if (settings.dataSrc === 'url') {
                  url = settings.data.url;
                  if (url.substr(0, 1) === '/') {
                    url = Formio.getBaseUrl() + settings.data.url;
                  }

                  // Disable auth for outgoing requests.
                  if (!settings.authenticate && url.indexOf(Formio.getBaseUrl()) === -1) {
                    options.disableJWT = true;
                    options.headers = options.headers || {};
                    options.headers.Authorization = undefined;
                    options.headers.Pragma = undefined;
                    options.headers['Cache-Control'] = undefined;
                  }
                }
                else {
                  url = Formio.getBaseUrl();
                  if (settings.data.project) {
                    url += '/project/' + settings.data.project;
                  }
                  url += '/form/' + settings.data.resource + '/submission';
                }

                options.params = {
                  limit: $scope.component.limit || 100,
                  skip: 0
                };

                $scope.loadMoreItems = function($select, $event) {
                  $event.stopPropagation();
                  $event.preventDefault();
                  options.params.skip = parseInt(options.params.skip, 10);
                  options.params.skip += parseInt(options.params.limit, 10);
                  $scope.refreshItems(true, null, true);
                };

                if (url) {
                  $scope.hasNextPage = true;
                  $scope.refreshItems = function(input, newUrl, append) {
                    if (typeof input === 'string') {
                      if (input === lastInput) {
                        return;
                      }
                      else {
                        // Since the search has changed, reset the limit and skip.
                        options.params.limit = $scope.component.limit || 100;
                        options.params.skip = 0;
                      }
                    }

                    lastInput = input;
                    newUrl = newUrl || url;
                    newUrl = $interpolate(newUrl)({
                      data: $scope.submission ? $scope.submission.data : {},
                      row: $scope.data || {},
                      formioBase: $rootScope.apiBase || 'https://api.form.io'
                    });
                    if (!newUrl) {
                      return;
                    }

                    // If this is a search, then add that to the filter.
                    if (
                      settings.searchField &&
                      (typeof input === 'string') &&
                      input
                    ) {
                      options.params[encodeURIComponent(settings.searchField)] = encodeURIComponent(input);
                    }
                    else {
                      delete options.params[encodeURIComponent(settings.searchField)];
                    }

                    // Add the other filter.
                    if (settings.filter) {
                      var filter = $interpolate(settings.filter)({
                        data: $scope.submission ? $scope.submission.data : {},
                        row: $scope.data
                      });
                      // This changes 'a=b&c=d' into an object and assigns to params.
                      _assign(options.params, JSON.parse('{"' + decodeURI(filter).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'));
                    }

                    // If they wish to return only some fields.
                    if (settings.selectFields) {
                      options.params.select = settings.selectFields;
                    }

                    // Set the new result.
                    var setResult = function(data) {
                      // coerce the data into an array.
                      if (!(data instanceof Array)) {
                        data = [data];
                      }

                      if (data.length < options.params.limit) {
                        $scope.hasNextPage = false;
                      }
                      else {
                        $scope.hasNextPage = true;
                      }
                      if (append) {
                        $scope.selectItems = $scope.selectItems.concat(data);
                      }
                      else {
                        $scope.selectItems = data;
                      }

                      // Ensure the value is set to what it should be set to.
                      ensureValue();
                    };

                    var promise;
                    if (settings.dataSrc === 'resource') {
                      promise = (new Formio(newUrl)).loadSubmissions(options);
                    }
                    else {
                      // Add in headers if specified
                      if ($scope.component.data.hasOwnProperty('headers') && $scope.component.data.headers.length > 0) {
                        options.headers = _assign(options.headers, $scope.component.data.headers.reduce(function(headers, current) {
                          if (current.key) {
                            headers[current.key] = current.value;
                          }
                          return headers;
                        }, {}));
                      }

                      //If disableLimit is true and data source is 'url' then removing 'limit' and 'skip' parameters from options.
                      if (settings.dataSrc === 'url' && settings.data.disableLimit) {
                        delete options.params.limit;
                        delete options.params.skip;
                      }

                      promise = $http.get(newUrl, options).then(function(result) {
                        return result.data;
                      });
                    }

                    return promise.then(function(data) {
                      if (data) {
                        // If the selectValue prop is defined, use it.
                        if (selectValues) {
                          setResult(_get(data, selectValues, []));
                        }
                        // Attempt to default to the formio settings for a resource.
                        else if (data.hasOwnProperty('data')) {
                          setResult(data.data);
                        }
                        else if (data.hasOwnProperty('items')) {
                          setResult(data.items);
                        }
                        // Use the data itself.
                        else {
                          setResult(data);
                        }
                      }
                      return $scope.selectItems;
                    }).finally(function() {
                      initialized.resolve($scope.selectItems);
                    });
                  };
                  $scope.refreshItems(true);
                }
                ensureValue();
                break;
              default:
                $scope.selectItems = [];
                initialized.resolve($scope.selectItems);
            }
          }
        ],
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'selectField',
          placeholder: '',
          data: {
            values: [],
            json: '',
            url: '',
            resource: '',
            custom: ''
          },
          dataSrc: 'values',
          valueProperty: '',
          defaultValue: '',
          refreshOn: '',
          filter: '',
          authenticate: false,
          template: '<span>{{ item.label }}</span>',
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/select.html',
        "<label ng-if=\"component.label && !component.hideLabel\"  for=\"{{ componentId }}\" class=\"control-label\" ng-class=\"{'field-required': isRequired(component)}\">{{ component.label | formioTranslate:null:builder }}</label>\r\n<span ng-if=\"!component.label && isRequired(component)\" class=\"glyphicon glyphicon-asterisk form-control-feedback field-required-inline\" aria-hidden=\"true\"></span>\r\n<ui-select\r\n  ui-select-required\r\n  ui-select-open-on-focus\r\n  ng-model=\"data[component.key]\"\r\n  safe-multiple-to-single\r\n  name=\"{{ componentId }}\"\r\n  ng-disabled=\"readOnly\"\r\n  ng-required=\"isRequired(component)\"\r\n  id=\"{{ componentId }}\"\r\n  theme=\"bootstrap\"\r\n  custom-validator=\"component.validate.custom\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n>\r\n  <ui-select-match class=\"ui-select-match\" placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\">\r\n    <formio-select-item template=\"component.template\" item=\"$item || $select.selected\" select=\"$select\"></formio-select-item>\r\n  </ui-select-match>\r\n  <ui-select-choices class=\"ui-select-choices\" repeat=\"getSelectItem(item) as item in selectItems | filter: $select.search\" refresh=\"refreshItems($select.search)\" refresh-delay=\"250\">\r\n    <formio-select-item template=\"component.template\" item=\"item\" select=\"$select\"></formio-select-item>\r\n    <button ng-if=\"hasNextPage && ($index == $select.items.length-1)\" class=\"btn btn-success btn-block\" ng-click=\"loadMoreItems($select, $event)\" ng-disabled=\"selectLoading\">Load more...</button>\r\n  </ui-select-choices>\r\n</ui-select>\r\n<div ng-if=\"!!component.description\" class=\"help-block\">\r\n  <span>{{ component.description }}</span>\r\n</div>\r\n<formio-errors ng-if=\"::!builder\"></formio-errors>\r\n"
      );

      // Change the ui-select to ui-select multiple.
      $templateCache.put('formio/components/select-multiple.html',
        $templateCache.get('formio/components/select.html').replace('<ui-select', '<ui-select multiple')
      );
    }
  ]);
};

},{"lodash/assign":142,"lodash/cloneDeep":143,"lodash/get":147,"lodash/isEqual":154,"lodash/set":168}],201:[function(_dereq_,module,exports){
"use strict";


module.exports = function(app) {
  app.directive('formioSelectBoxes', [function() {
    return {
      restrict: 'E',
      replace: true,
      require: 'ngModel',
      scope: {
        component: '=',
        componentId: '=',
        readOnly: '=',
        model: '=ngModel',
        gridRow: '=',
        gridCol: '=',
        builder: '=?'
      },
      templateUrl: 'formio/components/selectboxes-directive.html',
      link: function($scope, el, attrs, ngModel) {
        if ($scope.builder) return;
        // Initialize model
        var model = {};
        angular.forEach($scope.component.values, function(v) {
          model[v.value] = ngModel.$viewValue.hasOwnProperty(v.value)
            ? !!ngModel.$viewValue[v.value]
            : false;
        });
        // FA-835 - Update the view model with our defaults.
        // FA-921 - Attempt to load a current model, if present before the defaults.
        ngModel.$setViewValue($scope.model || model);

        ngModel.$setPristine(true);
        ngModel.$isEmpty = function(value) {
          if (typeof value === 'undefined') {
            return true;
          }

          return Object.keys(value).every(function(key) {
            return !value[key];
          });
        };

        $scope.toggleCheckbox = function(value) {
          var _model = angular.copy(ngModel.$viewValue || {});
          _model[value] = !_model[value];
          ngModel.$setViewValue(_model);
        };
      }
    };
  }]);

  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('selectboxes', {
        title: 'Select Boxes',
        template: 'formio/components/selectboxes.html',
        tableView: function(data, component) {
          if (!data) return '';

          return Object.keys(data)
          .filter(function(key) {
            return data[key];
          })
          .map(function(data) {
            component.values.forEach(function(item) {
              if (item.value === data) {
                data = item.label;
              }
            });
            return data;
          })
          .join(', ');
        },
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'selectboxesField',
          values: [],
          inline: false,
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false
          }
        }
      });
    }
  ]);

  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/selectboxes-directive.html',
        "<div class=\"select-boxes\">\r\n  <div ng-class=\"component.inline ? 'checkbox-inline' : 'checkbox'\" ng-repeat=\"v in component.values track by $index\">\r\n    <label class=\"control-label\" for=\"{{ componentId }}-{{ v.value }}\">\r\n      <input type=\"checkbox\"\r\n        id=\"{{ componentId }}-{{ v.value }}\"\r\n        name=\"{{ componentId }}-{{ v.value }}\"\r\n        value=\"{{ v.value }}\"\r\n        tabindex=\"{{ component.tabindex || 0 }}\"\r\n        ng-disabled=\"readOnly\"\r\n        ng-click=\"toggleCheckbox(v.value)\"\r\n        ng-checked=\"model[v.value]\"\r\n        grid-row=\"gridRow\"\r\n        grid-col=\"gridCol\"\r\n      >\r\n      {{ v.label | formioTranslate:null:builder }}\r\n    </label>\r\n  </div>\r\n</div>\r\n"
      );
      $templateCache.put('formio/components/selectboxes.html',
        "<div class=\"select-boxes\">\r\n  <label ng-if=\"component.label && !component.hideLabel\" for=\"{{ componentId }}\" class=\"control-label\" ng-class=\"{'field-required': isRequired(component)}\">\r\n    {{ component.label }}\r\n  </label>\r\n  <formio-select-boxes\r\n    name=\"{{componentId}}\"\r\n    ng-model=\"data[component.key]\"\r\n    ng-model-options=\"{allowInvalid: true}\"\r\n    component=\"component\"\r\n    component-id=\"componentId\"\r\n    read-only=\"readOnly\"\r\n    ng-required=\"isRequired(component)\"\r\n    custom-validator=\"component.validate.custom\"\r\n    grid-row=\"gridRow\"\r\n    grid-col=\"gridCol\"\r\n    builder=\"builder\"\r\n  ></formio-select-boxes>\r\n  <div ng-if=\"!!component.description\" class=\"help-block\">\r\n    <span>{{ component.description }}</span>\r\n  </div>\r\n  <formio-errors ng-if=\"::!builder\"></formio-errors>\r\n</div>\r\n"
      );
    }
  ]);
};

},{}],202:[function(_dereq_,module,exports){
"use strict";

var SignaturePad = _dereq_('signature_pad');
module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('signature', {
        title: 'Signature',
        template: 'formio/components/signature.html',
        tableView: function(data) {
          return data ? 'Yes' : 'No';
        },
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'signature',
          placeholder: '',
          footer: 'Sign above',
          width: '100%',
          height: '150',
          penColor: 'black',
          backgroundColor: 'rgb(245,245,235)',
          minWidth: '0.5',
          maxWidth: '2.5',
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false
          }
        },
        viewTemplate: 'formio/componentsView/signature.html'
      });
    }
  ]);
  app.directive('signature', function() {
    return {
      restrict: 'A',
      scope: {
        component: '='
      },
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        if (scope.builder) return;
        if (!ngModel) {
          return;
        }

        // Sets the label of component for error display.
        scope.component.label = 'Signature';
        scope.component.hideLabel = true;

        // Sets the dimension of a width or height.
        var setDimension = function(dim) {
          var param = (dim === 'width') ? 'clientWidth' : 'clientHeight';
          if (scope.component[dim].slice(-1) === '%') {
            var percent = parseFloat(scope.component[dim].slice(0, -1)) / 100;
            element[0][dim] = element.parent().eq(0)[0][param] * percent;
          }
          else {
            element[0][dim] = parseInt(scope.component[dim], 10);
            scope.component[dim] = element[0][dim] + 'px';
          }
        };

        // Set the width and height of the canvas.
        // Reset size if element changes visibility.
        scope.$watch('component.display', function() {
          setDimension('width');
          setDimension('height');
        });

        // Create the signature pad.
        var signaturePad = new SignaturePad(element[0], {
          minWidth: scope.component.minWidth,
          maxWidth: scope.component.maxWidth,
          penColor: scope.component.penColor,
          backgroundColor: scope.component.backgroundColor
        });

        scope.$watch('component.penColor', function(newValue) {
          signaturePad.penColor = newValue;
        });

        scope.$watch('component.backgroundColor', function(newValue) {
          signaturePad.backgroundColor = newValue;
          signaturePad.clear();
        });

        // Clear the signature.
        scope.component.clearSignature = function() {
          signaturePad.clear();
          readSignature();
        };

        // Set some CSS properties.
        element.css({
          'border-radius': '4px',
          'box-shadow': '0 0 5px rgba(0, 0, 0, 0.02) inset',
          'border': '1px solid #f4f4f4'
        });

        function readSignature() {
          if (scope.$parent.isRequired(scope.component) && signaturePad.isEmpty()) {
            ngModel.$setViewValue('');
          }
          else {
            ngModel.$setViewValue(signaturePad.toDataURL());
          }
        }

        ngModel.$render = function() {
          signaturePad.fromDataURL(ngModel.$viewValue);
        };
        signaturePad.onEnd = function() {
          scope.$evalAsync(readSignature);
        };
      }
    };
  });
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache,
              FormioUtils) {
      $templateCache.put('formio/components/signature.html', FormioUtils.fieldWrap(
        "<div ng-if=\"readOnly\">\r\n  <div ng-if=\"data[component.key] === 'YES'\">\r\n    [ Signature is hidden ]\r\n  </div>\r\n  <div ng-if=\"data[component.key] !== 'YES'\">\r\n    <img class=\"signature\" ng-attr-src=\"{{data[component.key]}}\" src=\"\" />\r\n  </div>\r\n</div>\r\n<div ng-if=\"!readOnly\" style=\"width: {{ component.width }}; height: 100%\">\r\n  <a class=\"btn btn-xs btn-default\" style=\"position:absolute; left: 0; top: 0; z-index: 1000\" ng-click=\"component.clearSignature()\">\r\n    <span class=\"glyphicon glyphicon-refresh\"></span>\r\n  </a>\r\n  <canvas signature component=\"component\" name=\"{{ componentId }}\" ng-model=\"data[component.key]\" ng-required=\"isRequired(component)\"></canvas>\r\n  <div class=\"formio-signature-footer\" style=\"text-align: center;color:#C3C3C3;\" ng-class=\"{'field-required': isRequired(component)}\">{{ component.footer | formioTranslate:null:builder }}</div>\r\n</div>\r\n"
      ));

      $templateCache.put('formio/componentsView/signature.html', FormioUtils.fieldWrap(
        "<div ng-if=\"data[component.key] === 'YES'\">\r\n  [ Signature is hidden ]\r\n</div>\r\n<div ng-if=\"data[component.key] && (data[component.key] !== 'YES')\">\r\n  <img class=\"signature\" ng-attr-src=\"{{ data[component.key] }}\" src=\"\" />\r\n</div>\r\n<div class=\"well text-center\" ng-if=\"!data[component.key] || (data[component.key] === 'NO')\">\r\n  <strong>No signature provided</strong>\r\n</div>\r\n"
      ));
    }
  ]);
};

},{"signature_pad":173}],203:[function(_dereq_,module,exports){
"use strict";


module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('survey', {
        title: 'Survey',
        template: 'formio/components/survey.html',
        group: 'advanced',
        tableView: function(data, component) {
          var view = '<table class="table table-striped table-bordered"><thead>';
          var values = {};
          angular.forEach(component.values, function(v) {
            values[v.value] = v.label;
          });
          angular.forEach(component.questions, function(question) {
            view += '<tr>';
            view += '<th>' + question.label + '</th>';
            view += '<td>' + values[data[question.value]] + '</td>';
            view += '</tr>';
          });
          view += '</tbody></table>';
          return view;
        },
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'survey',
          questions: [],
          values: [],
          defaultValue: '',
          protected: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
            custom: '',
            customPrivate: false
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache, FormioUtils) {
      $templateCache.put('formio/components/survey.html', FormioUtils.fieldWrap(
        "<table class=\"table table-striped table-bordered\">\r\n  <thead>\r\n    <tr>\r\n      <td></td>\r\n      <th ng-repeat=\"v in component.values track by $index\" style=\"text-align: center;\">{{ v.label }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tr ng-repeat=\"question in component.questions\"\r\n    ng-init=\"inputName = componentId + '-' + question.value\"\r\n    ng-class=\"{\r\n      'text-danger': !formioForm[inputName].$pristine && formioForm[inputName].$invalid\r\n    }\">\r\n    <td>{{ question.label }}</td>\r\n    <td ng-repeat=\"v in component.values track by $index\" style=\"text-align: center;\">\r\n      <input\r\n        type=\"radio\"\r\n        id=\"{{ componentId }}-{{ question.value }}-{{ v.value }}\" name=\"{{ componentId }}-{{ question.value }}\"\r\n        tabindex=\"{{ component.tabindex || 0 }}\"\r\n        ng-value=\"v.value\"\r\n        ng-model=\"data[component.key][question.value]\"\r\n        ng-required=\"isRequired(component)\"\r\n        ng-disabled=\"readOnly\"\r\n        custom-validator=\"component.validate.custom\"\r\n      >\r\n    </td>\r\n  </tr>\r\n</table>\r\n"
      ));
    }
  ]);
};

},{}],204:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('table', {
        title: 'Table',
        template: 'formio/components/table.html',
        group: 'layout',
        settings: {
          input: false,
          key: 'table',
          numRows: 3,
          numCols: 3,
          rows: [[{components: []}, {components: []}, {components: []}], [{components: []}, {components: []}, {components: []}], [{components: []}, {components: []}, {components: []}]],
          header: [],
          caption: '',
          striped: false,
          bordered: false,
          hover: false,
          condensed: false,
          tableView: false
        },
        tableView: function(data, component, $interpolate, componentInfo, tableChild) {
          var view = '<table class="table table-striped table-bordered table-child">';

          if (!tableChild) {
            view += '<thead>';
            view += '<tr><th>Table (' + component.key + ')</th></tr>';
            view += '</thead>';
          }

          view += '<tbody>';

          for (var row = 0; row < component.numRows; row++) {
            view += '<tr>';
            for (var col = 0; col < component.numCols; col++) {
              view += '<td>';
              // Each column is its own table.
              view += '<table class="table table-striped table-bordered table-child">';
              view += '<tbody>';
              angular.forEach(component.rows[row][col].components, function(component) {
                view += '<tr>' + GridUtils.columnForComponent(data, component, $interpolate, componentInfo) + '</tr>';
              });

              view += '</tbody></table>';
              view += '</td>';
            }
            view += '</tr>';
          }

          view += '</tbody></table>';
          return view;
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      var tableClasses = "{'table-striped': component.striped, ";
      tableClasses += "'table-bordered': component.bordered, ";
      tableClasses += "'table-hover': component.hover, ";
      tableClasses += "'table-condensed': component.condensed}";
      $templateCache.put('formio/components/table.html',
        "<div class=\"table-responsive\" id=\"{{ component.key }}\">\r\n  <table ng-class=\"{'table-striped': component.striped, 'table-bordered': component.bordered, 'table-hover': component.hover, 'table-condensed': component.condensed}\" class=\"table\">\r\n    <thead ng-if=\"component.header.length\">\r\n      <th ng-repeat=\"header in component.header track by $index\">{{ header | formioTranslate:null:builder }}</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr ng-repeat=\"row in component.rows track by $index\">\r\n        <td ng-repeat=\"column in row track by $index\">\r\n          <formio-component\r\n            ng-repeat=\"_component in column.components track by $index\"\r\n            component=\"_component\"\r\n            data=\"data\"\r\n            formio=\"formio\"\r\n            submission=\"submission\"\r\n            hide-components=\"hideComponents\"\r\n            ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n            formio-form=\"formioForm\"\r\n            read-only=\"isDisabled(_component, data)\"\r\n            grid-row=\"gridRow\"\r\n            grid-col=\"gridCol\"\r\n            builder=\"builder\"\r\n          ></formio-component>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"
      );

      $templateCache.put('formio/componentsView/table.html',
        "<div class=\"table-responsive\" id=\"{{ component.key }}\">\r\n  <table ng-class=\"{'table-striped': component.striped, 'table-bordered': component.bordered, 'table-hover': component.hover, 'table-condensed': component.condensed}\" class=\"table\">\r\n    <thead ng-if=\"component.header.length\">\r\n      <th ng-repeat=\"header in component.header track by $index\">{{ header }}</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr ng-repeat=\"row in component.rows track by $index\">\r\n        <td ng-repeat=\"column in row track by $index\">\r\n          <formio-component-view\r\n            ng-repeat=\"_component in column.components track by $index\"\r\n            component=\"_component\"\r\n            data=\"data\"\r\n            form=\"form\"\r\n            submission=\"submission\"\r\n            ignore=\"ignore\"\r\n            ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n            builder=\"builder\"\r\n          ></formio-component-view>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],205:[function(_dereq_,module,exports){
"use strict";

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('textarea', {
        title: 'Text Area',
        template: function($scope) {
          if (!$scope.readOnly && $scope.component.wysiwyg) {
            var defaults = {
              toolbarGroups:  [
                {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
                {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                {name: 'links', groups: ['links']},
                {name: 'insert', groups: ['insert']},
                '/',
                {name: 'styles', groups: ['Styles', 'Format', 'Font', 'FontSize']},
                {name: 'colors', groups: ['colors']},
                {name: 'clipboard', groups: ['clipboard', 'undo']},
                {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
                {name: 'document', groups: ['mode', 'document', 'doctools']},
                {name: 'others', groups: ['others']},
                {name: 'tools', groups: ['tools']}
              ],
              extraPlugins: 'justify,font',
              removeButtons: 'Cut,Copy,Paste,Underline,Subscript,Superscript,Scayt,About',
              uiColor: '#eeeeee',
              height: '400px',
              width: '100%'
            };
            if ($scope.component.wysiwyg === true) {
              $scope.component.wysiwyg = defaults;
            }
            else {
              $scope.component.wysiwyg = angular.extend(defaults, $scope.component.wysiwyg);
            }
            return 'formio/components/texteditor.html';
          }
          return 'formio/components/textarea.html';
        },
        settings: {
          input: true,
          tableView: true,
          label: '',
          key: 'textareaField',
          placeholder: '',
          prefix: '',
          suffix: '',
          rows: 3,
          multiple: false,
          defaultValue: '',
          protected: false,
          persistent: true,
          hidden: false,
          wysiwyg: false,
          clearOnHide: true,
          validate: {
            required: false,
            minLength: '',
            maxLength: '',
            pattern: '',
            custom: ''
          }
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    'FormioUtils',
    function($templateCache,
              FormioUtils) {
      $templateCache.put('formio/components/textarea.html', FormioUtils.fieldWrap(
        "<textarea\r\n  class=\"form-control\"\r\n  ng-model=\"data[component.key]\"\r\n  ng-disabled=\"readOnly\"\r\n  ng-required=\"isRequired(component)\"\r\n  safe-multiple-to-single\r\n  id=\"{{ componentId }}\"\r\n  name=\"{{ componentId }}\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n  ng-attr-placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\"\r\n  custom-validator=\"component.validate.custom\"\r\n  rows=\"{{ component.rows }}\"\r\n></textarea>\r\n"
      ));
      $templateCache.put('formio/components/texteditor.html', FormioUtils.fieldWrap(
        "<textarea\r\n  class=\"form-control\"\r\n  ng-model=\"data[component.key]\"\r\n  ng-disabled=\"readOnly\"\r\n  ng-required=\"isRequired(component)\"\r\n  ckeditor=\"component.wysiwyg\"\r\n  safe-multiple-to-single\r\n  id=\"{{ componentId }}\"\r\n  name=\"{{ componentId }}\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n  ng-attr-placeholder=\"{{ component.placeholder }}\"\r\n  custom-validator=\"component.validate.custom\"\r\n  rows=\"{{ component.rows }}\"\r\n></textarea>\r\n"
      ));
    }
  ]);
};

},{}],206:[function(_dereq_,module,exports){
"use strict";


module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('textfield', {
        title: 'Text Field',
        template: 'formio/components/textfield.html',
        icon: 'fa fa-terminal',
        settings: {
          input: true,
          tableView: true,
          inputType: 'text',
          inputMask: '',
          label: '',
          key: 'textField',
          placeholder: '',
          prefix: '',
          suffix: '',
          multiple: false,
          defaultValue: '',
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
            minLength: '',
            maxLength: '',
            pattern: '',
            custom: '',
            customPrivate: false
          },
          conditional: {
            show: null,
            when: null,
            eq: ''
          }
        }
      });
    }
  ]);

  app.run([
    '$templateCache',
    'FormioUtils',
    function(
      $templateCache,
      FormioUtils
    ) {
      $templateCache.put('formio/components/textfield.html', FormioUtils.fieldWrap(
        "<input\r\n  type=\"{{ component.inputType }}\"\r\n  class=\"form-control\"\r\n  id=\"{{ componentId }}\"\r\n  name=\"{{ componentId }}\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n  ng-disabled=\"readOnly\"\r\n  ng-model=\"data[component.key]\"\r\n  ng-model-options=\"{ debounce: 500 }\"\r\n  safe-multiple-to-single\r\n  ng-required=\"isRequired(component)\"\r\n  ng-minlength=\"component.validate.minLength\"\r\n  ng-maxlength=\"component.validate.maxLength\"\r\n  ng-pattern=\"component.validate.pattern\"\r\n  custom-validator=\"component.validate.custom\"\r\n  ng-attr-placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\"\r\n  ui-mask=\"{{ component.inputMask }}\"\r\n  ui-mask-placeholder=\"\"\r\n  ui-options=\"uiMaskOptions\"\r\n>\r\n"
      ));
    }
  ]);
};

},{}],207:[function(_dereq_,module,exports){
"use strict";

var moment = _dereq_('moment');

module.exports = function(app) {
  app.directive('timeFormat', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {
        ngModel.$parsers.push(function(utcDate) {
          if (!utcDate) return;
          return moment(utcDate).format(scope.component.format);
        });

        ngModel.$formatters.push(function(utcDate) {
          if (!utcDate) return;
          return moment(utcDate, scope.component.format).toDate();
        });

        scope.$watch('data.' + scope.component.key, function() {
          if (ngModel.$modelValue) {
            ngModel.$setViewValue(moment(ngModel.$modelValue, scope.component.format).format('HH:mm:ss.SSS'));
            ngModel.$render();
          }
        });
      }
    };
  });
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('time', {
        title: 'Time',
        template: 'formio/components/time.html',
        group: 'advanced',
        settings: {
          input: true,
          tableView: true,
          inputType: 'time',
          format: 'HH:mm',
          label: '',
          key: 'timeField',
          placeholder: '',
          prefix: '',
          suffix: '',
          defaultValue: '',
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true
        }
      });
    }
  ]);

  app.run([
    '$templateCache',
    'FormioUtils',
    function(
      $templateCache,
      FormioUtils
    ) {
      $templateCache.put('formio/components/time.html', FormioUtils.fieldWrap(
        "{{data[component.key]}}<input\r\n  time-format\r\n  type=\"{{ component.inputType }}\"\r\n  class=\"form-control\"\r\n  id=\"{{ componentId }}\"\r\n  name=\"{{ componentId }}\"\r\n  tabindex=\"{{ component.tabindex || 0 }}\"\r\n  ng-disabled=\"readOnly\"\r\n  ng-model=\"data[component.key]\"\r\n  safe-multiple-to-single\r\n  ng-required=\"isRequired(component)\"\r\n  ng-minlength=\"component.validate.minLength\"\r\n  ng-maxlength=\"component.validate.maxLength\"\r\n  ng-pattern=\"component.validate.pattern\"\r\n  custom-validator=\"component.validate.custom\"\r\n  ng-attr-placeholder=\"{{ component.placeholder | formioTranslate:null:builder }}\"\r\n  ui-mask=\"{{ component.inputMask }}\"\r\n  ui-mask-placeholder=\"\"\r\n  ui-options=\"uiMaskOptions\"\r\n>\r\n"
      ));
    }
  ]);
};

},{"moment":172}],208:[function(_dereq_,module,exports){
"use strict";

var GridUtils = _dereq_('../factories/GridUtils')();

module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('well', {
        title: 'Well',
        template: 'formio/components/well.html',
        group: 'layout',
        settings: {
          key: 'well',
          input: false,
          components: [],
          tableView: false
        },
        viewTemplate: 'formio/componentsView/well.html',
        tableView: function(data, component, $interpolate, componentInfo, tableChild) {
          var view = '<table class="table table-striped table-bordered table-child">';

          if (!tableChild) {
            view += '<thead><tr>';
            view += '<th>Well (' + component.key + ')</th>';
            view += '</tr></thead>';
          }
          view += '<tbody>';
          angular.forEach(component.components, function(component) {
            view += '<tr>' + GridUtils.columnForComponent(data, component, $interpolate, componentInfo, true) + '</tr>';
          });

          view += '</tbody></table>';
          return view;
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/well.html',
        "<div class=\"well\" id=\"{{ component.key }}\">\r\n  <formio-component\r\n    ng-repeat=\"_component in component.components track by $index\"\r\n    component=\"_component\"\r\n    data=\"data\"\r\n    formio=\"formio\"\r\n    submission=\"submission\"\r\n    hide-components=\"hideComponents\"\r\n    ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n    read-only=\"isDisabled(_component, data)\"\r\n    formio-form=\"formioForm\"\r\n    grid-row=\"gridRow\"\r\n    grid-col=\"gridCol\"\r\n    builder=\"builder\"\r\n  ></formio-component>\r\n</div>\r\n"
      );
      $templateCache.put('formio/componentsView/well.html',
        "<div class=\"well\" id=\"{{ component.key }}\">\r\n  <formio-component-view\r\n    ng-repeat=\"_component in component.components track by $index\"\r\n    component=\"_component\"\r\n    data=\"data\"\r\n    form=\"form\"\r\n    submission=\"submission\"\r\n    ignore=\"ignore\"\r\n    ng-if=\"builder ? '::true' : isVisible(_component, data)\"\r\n    builder=\"builder\"\r\n  ></formio-component-view>\r\n</div>\r\n"
      );
    }
  ]);
};

},{"../factories/GridUtils":222}],209:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, ele, attrs, ctrl) {
      if (scope.builder) return;
      if (
        !scope.component.validate ||
        !scope.component.validate.custom
      ) {
        return;
      }

      var _get = function(item, path, def) {
        if (!item) {
          return def || undefined;
        }
        if (!path) {
          return item;
        }

        // If the path is a string, turn it into an array.
        if (typeof path === 'string') {
          path = path.split('.');
        }
        // If the path is an array, take the first element, and recurse its path
        if (path instanceof Array) {
          var current = path.shift();
          if (item.hasOwnProperty(current)) {
            // If there are no more path items, stop here.
            if (path.length === 0) {
              return item[current];
            }

            return _get(item[current], path);
          }

          return undefined;
        }

        return undefined;
      };

      ctrl.$validators.custom = function(modelValue, viewValue) {
        var valid = true;
        /*eslint-disable no-unused-vars */
        var input = modelValue || viewValue;

        // FOR-255 - Enable row data and form data to be visible in the validator.
        var data = scope.submission.data;
        var row = scope.data;
        /*eslint-enable no-unused-vars */

        var custom = scope.component.validate.custom;
        custom = custom.replace(/({{\s{0,}(.*[^\s]){1}\s{0,}}})/g, function(match, $1, $2) {
          return _get(scope.submission.data, $2);
        });

        try {
          /* jshint evil: true */
          eval(custom);
        }
        catch (err) {
          valid = err.message;
        }

        if (valid !== true) {
          scope.component.customError = valid;
          return false;
        }
        return true;
      };
    }
  };
};

},{}],210:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      src: '=?',
      url: '=?',
      formAction: '=?',
      form: '=?',
      submission: '=?',
      readOnly: '=?',
      hideComponents: '=?',
      requireComponents: '=?',
      disableComponents: '=?',
      formioOptions: '=?',
      options: '=?'
    },
    controller: [
      '$scope',
      '$http',
      '$element',
      'FormioScope',
      'Formio',
      'FormioUtils',
      '$q',
      function(
        $scope,
        $http,
        $element,
        FormioScope,
        Formio,
        FormioUtils,
        $q
      ) {
        var iframeReady = $q.defer();
        $scope._src = $scope.src || '';
        $scope.formioAlerts = [];
        $scope.iframeReady = false;
        // Shows the given alerts (single or array), and dismisses old alerts
        this.showAlerts = $scope.showAlerts = function(alerts) {
          /* eslint-disable no-empty */
          try {
            alerts.message = (JSON.parse(alerts.message)).data;
          }
          catch (e) {}
          /* eslint-enable no-empty */

          $scope.formioAlerts = [].concat(alerts);
        };

        $scope.getIframeSrc = function(pdf) {
          var iframeSrc = pdf.src + '.html';
          var params = [];
          if ($scope.form.builder) {
            params.push('builder=1');
          }
          if ($scope.readOnly) {
            params.push('readonly=1');
          }
          if (params.length) {
            iframeSrc += '?' + params.join('&');
          }
          return iframeSrc;
        };

        $scope.downloadUrl = '';

        $scope.getPDFDownload = function(pdf) {
          if (!$scope.formio) {
            return;
          }
          var download = '';
          if ($scope.formio && $scope.formio.submissionUrl) {
            download = $scope.formio.submissionUrl;
          }
          else if ($scope.submission._id) {
            download = Formio.baseUrl + '/project/' + $scope.form.project + '/';
            download += '/form/' + $scope.form._id;
            download += '/submission/' + $scope.submission._id;
          }
          if (!download) {
            return;
          }

          download += '/download/' + pdf.id;
          var allowedPath = download.replace(Formio.baseUrl, '');
          allowedPath = allowedPath.replace(Formio.getProjectUrl(), '');
          return $scope.formio.getTempToken(3600, 'GET:' + allowedPath).then(function(tempToken) {
            download += '?token=' + tempToken.key;
            $scope.downloadUrl = download;
            return download;
          });
        };

        // Add the live form parameter to the url.
        if ($scope._src && ($scope._src.indexOf('live=') === -1)) {
          $scope._src += ($scope._src.indexOf('?') === -1) ? '?' : '&';
          $scope._src += 'live=1';
        }

        var sendIframeMessage = function(message) {
          iframeReady.promise.then(function(iframe) {
            iframe.contentWindow.postMessage(JSON.stringify(message), '*');
          });
        };

        $scope.$on('iframe-ready', function() {
          $scope.iframeReady = true;
          var iframe = $element.find('.formio-iframe')[0];
          if (iframe) {
            iframeReady.resolve(iframe);
            if ($scope.form) {
              sendIframeMessage({name: 'form', data: $scope.form});
            }
            if ($scope.submission) {
              $scope.submission.readOnly = $scope.readOnly;
              sendIframeMessage({name: 'submission', data: $scope.submission});
            }
          }
        });

        $scope.$on('iframeMessage', function(event, message) {
          sendIframeMessage(message);
        });

        var cancelFormLoadEvent = $scope.$on('formLoad', function(event, form) {
          cancelFormLoadEvent();
          iframeReady.promise.then(function() {
            $scope.getPDFDownload(form.settings.pdf);
          });
          sendIframeMessage({name: 'form', data: form});
        });

        $scope.$on('submissionLoad', function(event, submission) {
          submission.readOnly = $scope.readOnly;
          sendIframeMessage({name: 'submission', data: submission});
        });

        // Submit the form from the iframe.
        $scope.$on('iframe-submission', function(event, submission) {
          $scope.submitForm(submission);
        });

        // Called from the submit on iframe.
        $scope.submitIFrameForm = function() {
          sendIframeMessage({name: 'getSubmission'});
        };

        $scope.zoomIn = function() {
          sendIframeMessage({name: 'zoomIn'});
        };

        $scope.zoomOut = function() {
          sendIframeMessage({name: 'zoomOut'});
        };

        // FOR-71
        if (!$scope._src && !$scope.builder) {
          $scope.$watch('src', function(src) {
            if (!src) {
              return;
            }
            $scope._src = src;
            $scope.formio = FormioScope.register($scope, $element, {
              form: true,
              submission: true
            });
          });
        }

        // Create the formio object.
        $scope.formio = FormioScope.register($scope, $element, {
          form: true,
          submission: true
        });

        $scope.checkErrors = function(form) {
          if (form.submitting) {
            return true;
          }
          form.$setDirty(true);
          for (var key in form) {
            if (form[key] && form[key].hasOwnProperty('$pristine')) {
              form[key].$setDirty(true);
            }
            if (form[key] && form[key].$validate) {
              form[key].$validate();
            }
          }
          return !form.$valid;
        };

        $scope.isVisible = function(component, row) {
          return FormioUtils.isVisible(
            component,
            row,
            $scope.submission ? $scope.submission.data : null,
            $scope.hideComponents
          );
        };

        // Show the submit message and say the form is no longer submitting.
        var onSubmit = function(submission, message, form) {
          if (message) {
            $scope.showAlerts({
              type: 'success',
              message: message
            });
          }
          if (form) {
            form.submitting = false;
          }
        };

        // Called when a submission has been made.
        var onSubmitDone = function(method, submission, form) {
          var message = '';
          if ($scope.options && $scope.options.submitMessage) {
            message = $scope.options.submitMessage;
          }
          else {
            message = 'Submission was ' + ((method === 'put') ? 'updated' : 'created') + '.';
          }
          onSubmit(submission, message, form);
          // Trigger the form submission.
          $scope.$emit('formSubmission', submission);
        };

        $scope.submitForm = function(submissionData, form) {
          // Allow custom action urls.
          if ($scope.action) {
            var method = submissionData._id ? 'put' : 'post';
            var action = $scope.action;
            // Add the action Id if it is not already part of the url.
            if (method === 'put' && (action.indexOf(submissionData._id) === -1)) {
              action += '/' + submissionData._id;
            }
            $http[method](action, submissionData).then(function(response) {
              Formio.clearCache();
              onSubmitDone(method, response.data, form);
            }, FormioScope.onError($scope, $element))
              .finally(function() {
                if (form) {
                  form.submitting = false;
                }
              });
          }

          // If they wish to submit to the default location.
          else if ($scope.formio && !$scope.formio.noSubmit) {
            // copy to remove angular $$hashKey
            $scope.formio.saveSubmission(submissionData, $scope.formioOptions).then(function(submission) {
              onSubmitDone(submission.method, submission, form);
            }, FormioScope.onError($scope, $element)).finally(function() {
              if (form) {
                form.submitting = false;
              }
            });
          }
          else {
            $scope.$emit('formSubmission', submissionData);
          }
        };

        $scope.isDisabled = function(component) {
          return $scope.readOnly || component.disabled || (Array.isArray($scope.disableComponents) && $scope.disableComponents.indexOf(component.key) !== -1);
        };

        $scope.isRequired = function(component) {
          return FormioUtils.isRequired(component, $scope.requireComponents);
        };

        // Called when the form is submitted.
        $scope.onSubmit = function(form) {
          $scope.formioAlerts = [];
          if ($scope.checkErrors(form)) {
            $scope.formioAlerts.push({
              type: 'danger',
              message: 'Please fix the following errors before submitting.'
            });
            return;
          }

          form.submitting = true;
          FormioUtils.alter('submit', $scope, $scope.submission, function(err) {
            if (err) {
              return this.showAlerts(err.alerts);
            }

            // Create a sanitized submission object.
            var submissionData = {data: {}};
            if ($scope.submission._id) {
              submissionData._id = $scope.submission._id;
            }
            if ($scope.submission.data._id) {
              submissionData._id = $scope.submission.data._id;
            }

            var grabIds = function(input) {
              if (!input) {
                return [];
              }

              if (!(input instanceof Array)) {
                input = [input];
              }

              var final = [];
              input.forEach(function(element) {
                if (element && element._id) {
                  final.push(element._id);
                }
              });

              return final;
            };

            var defaultPermissions = {};
            FormioUtils.eachComponent($scope.form.components, function(component) {
              if (component.type === 'resource' && component.key && component.defaultPermission) {
                defaultPermissions[component.key] = component.defaultPermission;
              }
              if ($scope.submission.data.hasOwnProperty(component.key)) {
                var value = $scope.submission.data[component.key];
                if (component.type === 'number' && (value !== null)) {
                  submissionData.data[component.key] = value ? parseFloat(value) : 0;
                }
                else {
                  submissionData.data[component.key] = value;
                }
              }
            }, true);

            angular.forEach($scope.submission.data, function(value, key) {
              if (value && !value.hasOwnProperty('_id')) {
                submissionData.data[key] = value;
              }

              // Setup the submission access.
              var perm = defaultPermissions[key];
              if (perm) {
                submissionData.access = submissionData.access || [];

                // Coerce value into an array for plucking.
                if (!(value instanceof Array)) {
                  value = [value];
                }

                // Try to find and update an existing permission.
                var found = false;
                submissionData.access.forEach(function(permission) {
                  if (permission.type === perm) {
                    found = true;
                    permission.resources = permission.resources || [];
                    permission.resources.concat(grabIds(value));
                  }
                });

                // Add a permission, because one was not found.
                if (!found) {
                  submissionData.access.push({
                    type: perm,
                    resources: grabIds(value)
                  });
                }
              }
            });

            // Allow the form to be completed externally.
            $scope.$on('submitDone', function(event, submission, message) {
              onSubmit(submission, message, form);
            });

            // Allow an error to be thrown externally.
            $scope.$on('submitError', function(event, error) {
              FormioScope.onError($scope, $element)(error);
            });

            var submitEvent = $scope.$emit('formSubmit', submissionData);
            if (submitEvent.defaultPrevented) {
              // Listener wants to cancel the form submission
              form.submitting = false;
              return;
            }

            // Make sure to make a copy of the submission data to remove bad characters.
            submissionData = angular.copy(submissionData);
            $scope.submitForm(submissionData, form);
          }.bind(this));
        };
      }
    ],
    templateUrl: 'formio.html'
  };
};

},{}],211:[function(_dereq_,module,exports){
"use strict";
module.exports = ['$sce', '$parse', '$compile', function($sce, $parse, $compile) {
  return {
    restrict: 'A',
    compile: function formioBindHtmlCompile(tElement, tAttrs) {
      var formioBindHtmlGetter = $parse(tAttrs.formioBindHtml);
      $compile.$$addBindingClass(tElement);
      return function formioBindHtmlLink(scope, element, attr) {
        $compile.$$addBindingInfo(element, attr.formioBindHtml);
        var value = formioBindHtmlGetter(scope);
        element.html($sce.getTrustedHtml(value) || '');
      };
    }
  };
}];

},{}],212:[function(_dereq_,module,exports){
"use strict";
var _get = _dereq_('lodash/get');

module.exports = [
  'Formio',
  'formioComponents',
  function(
    Formio,
    formioComponents
  ) {
    return {
      replace: true,
      restrict: 'E',
      require: '?^formio',
      scope: {
        component: '=',
        data: '=',
        submission: '=',
        hideComponents: '=',
        formio: '=',
        formioForm: '=',
        readOnly: '=',
        gridRow: '=',
        gridCol: '=',
        builder: '=?'
      },
      templateUrl: 'formio/component.html',
      link: function(scope, el, attrs, formioCtrl) {
        if (formioCtrl) {
          scope.showAlerts = formioCtrl.showAlerts.bind(formioCtrl);
        }
        else {
          scope.showAlerts = function() {
            throw new Error('Cannot call $scope.showAlerts unless this component is inside a formio directive.');
          };
        }
      },
      controller: [
        '$scope',
        '$http',
        '$controller',
        'FormioUtils',
        '$timeout',
        function(
          $scope,
          $http,
          $controller,
          FormioUtils,
          $timeout
        ) {
          $scope.builder = $scope.builder || false;
          // Options to match jquery.maskedinput masks
          $scope.uiMaskOptions = {
            maskDefinitions: {
              '9': /\d/,
              'a': /[a-zA-Z]/,
              '*': /[a-zA-Z0-9]/
            },
            clearOnBlur: false,
            eventsToHandle: ['input', 'keyup', 'click', 'focus'],
            silentEvents: ['click', 'focus']
          };

          // See if this component is visible or not.
          $scope.isVisible = function(component, row) {
            if ($scope.builder) return true;
            return FormioUtils.isVisible(
              component,
              row,
              $scope.submission ? $scope.submission.data : null,
              $scope.hideComponents
            );
          };

          // FOR-245 - Fix reset buttons.
          $scope.resetForm = function() {
            // Manually remove each key so we don't lose a reference to original
            // data in child scopes.
            for (var key in $scope.data) {
              delete $scope.data[key];
            }
          };

          $scope.isDisabled = function(component) {
            return $scope.readOnly || (typeof $scope.$parent.isDisabled === 'function' && $scope.$parent.isDisabled(component));
          };

          $scope.isRequired = function(component) {
            return FormioUtils.isRequired(component);
          };

          // Survey components haves questions.
          // We want to make the survey component label marked with error if any
          // of the questions is in invalid state.
          // So, first check if conponent has questions, then iterate over them.
          // Break in the first invalid question. Is enough to set the has-error
          // class to the survey component.
          // Note: Chek that this method is used in the template.
          $scope.invalidQuestions = function(formioForm) {
            var errorInQuestions = false;
            if (!$scope.component.questions) {
              errorInQuestions = false;
            }
            else {
              var i;
              for (i = 0; i < $scope.component.questions.length; i++) {
                var question = $scope.component.questions[i];
                var questionInputName = [$scope.component.key, question.value].join('-');
                var formInput = formioForm[questionInputName];
                if (formInput && !formInput.$pristine && formInput.$invalid) {
                  errorInQuestions = true;
                  break;
                }
              }
            }
            return errorInQuestions;
          };

          // Pass through checkConditional since this is an isolate scope.
          $scope.checkConditional = $scope.$parent.checkConditional;

          // FOR-71 - Dont watch in the builder view.
          // Calculate value when data changes.
          if (!$scope.builder && ($scope.component.calculateValue || _get($scope.component, 'validate.json'))) {
            $scope.$watch('data', function() {
              FormioUtils.checkCalculated($scope.component, $scope.submission, $scope.data);

              // Process jsonLogic stuff if present.
              if (_get($scope.component, 'validate.json')) {
                var input;

                // Only json parse once.
                if (typeof $scope.component.validate.json === 'string') {
                  try {
                    input = JSON.parse($scope.component.validate.json);
                    $scope.component.validate.json = input;
                  }
                  catch (e) {
                    /* eslint-disable no-console */
                    console.warn('Invalid JSON validator given for ' + $scope.component.key);
                    console.warn($scope.component.validate.json);
                    /* eslint-enable no-console */
                    delete $scope.component.validate.json;
                    return;
                  }
                }
                else {
                  input = $scope.component.validate.json;
                }

                var valid;
                try {
                  valid = FormioUtils.jsonLogic.apply(input, {
                    data: $scope.submission ? $scope.submission.data : $scope.data,
                    row: $scope.data
                  });
                }
                catch (err) {
                  valid = err.message;
                }

                $timeout(function() {
                  try {
                    if (valid !== true) {
                      $scope.component.customError = valid;
                      $scope.formioForm[$scope.component.key].$setValidity('custom', false);
                      return;
                    }

                    $scope.formioForm[$scope.component.key].$setValidity('custom', true);
                  }
                  catch (e) {
                    // Ignore any issues while editing the components.
                  }
                });
              }
            }, true);
          }

          // Get the settings.
          var component = formioComponents.components[$scope.component.type] || formioComponents.components['custom'];

          // Set the component with the defaults from the component settings.
          // Dont add the default key, so that components without keys will remain visible by default.
          angular.forEach(component.settings, function(value, key) {
            if (!$scope.component.hasOwnProperty(key) && key !== 'key') {
              $scope.component[key] = angular.copy(value);
            }
          });

          // Add a new field value.
          $scope.addFieldValue = function() {
            var defaultData = {};
            FormioUtils.checkDefaultValue($scope.component, $scope.submission, defaultData, $scope, function() {
              $scope.data[$scope.component.key] = $scope.data[$scope.component.key] || [];
              $scope.data[$scope.component.key].push(defaultData[$scope.component.key]);
            });
          };

          // Remove a field value.
          $scope.removeFieldValue = function(index) {
            if (!Array.isArray($scope.data[$scope.component.key])) {
              $scope.data[$scope.component.key] = [];
            }
            $scope.data[$scope.component.key].splice(index, 1);
          };

          // Set the template for the component.
          if (typeof component.template === 'function') {
            $scope.template = component.template($scope);
          }
          else {
            $scope.template = component.template;
          }

          // Allow component keys to look like "settings[username]"
          if ($scope.component.key && $scope.component.key.indexOf('[') !== -1) {
            var matches = $scope.component.key.match(/([^\[]+)\[([^]+)\]/);
            if ((matches.length === 3) && $scope.data.hasOwnProperty(matches[1])) {
              $scope.data = $scope.data[matches[1]];
              $scope.component.key = matches[2];
            }
          }

          // If the component has a controller.
          if (component.controller) {
            // Maintain reverse compatibility by executing the old method style.
            if (typeof component.controller === 'function') {
              component.controller($scope.component, $scope, $http, Formio);
            }
            else {
              $controller(component.controller, {$scope: $scope, $timeout: $timeout});
            }
          }

          // FOR-71 - Dont watch in the builder view.
          if (!$scope.builder) {
            $scope.$watch('component.multiple', function() {
              $scope.data = $scope.data || {};
              FormioUtils.checkDefaultValue($scope.component, $scope.submission, $scope.data, $scope);
              return;
            });
          }

          // Set the component name.
          $scope.componentId = $scope.component.key;
          if ($scope.gridRow !== undefined) {
            $scope.componentId += ('-' + $scope.gridRow);
          }
          if ($scope.gridCol !== undefined) {
            $scope.componentId += ('-' + $scope.gridCol);
          }
        }
      ]
    };
  }
];

},{"lodash/get":147}],213:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  'formioComponents',
  function(
    formioComponents
  ) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        component: '=',
        data: '=',
        form: '=',
        submission: '=',
        ignore: '=?',
        builder: '=?'
      },
      templateUrl: 'formio/component-view.html',
      controller: [
        '$scope',
        'Formio',
        'FormioUtils',
        function(
          $scope,
          Formio,
          FormioUtils
        ) {
          // Set the form url.
          $scope.formUrl = $scope.form ? Formio.getAppUrl() + '/form/' + $scope.form._id.toString() : '';
          $scope.isVisible = function(component, row) {
            return FormioUtils.isVisible(
              component,
              row,
              $scope.submission ? $scope.submission.data : null,
              $scope.hideComponents
            );
          };

          // Get the settings.
          var component = formioComponents.components[$scope.component.type] || formioComponents.components['custom'];

          // Set the template for the component.
          if (!component.viewTemplate) {
            $scope.template = 'formio/element-view.html';
          }
          else if (typeof component.viewTemplate === 'function') {
            $scope.template = component.viewTemplate($scope);
          }
          else {
            $scope.template = component.viewTemplate;
          }

          // Set the component name.
          $scope.componentId = $scope.component.key;
          if ($scope.gridRow !== undefined) {
            $scope.componentId += ('-' + $scope.gridRow);
          }
          if ($scope.gridCol !== undefined) {
            $scope.componentId += ('-' + $scope.gridCol);
          }
        }
      ]
    };
  }
];

},{}],214:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      form: '=?',
      submission: '=?',
      src: '=?',
      formAction: '=?',
      resourceName: '=?',
      message: '=?'
    },
    templateUrl: 'formio-delete.html',
    controller: [
      '$scope',
      '$element',
      'FormioScope',
      'Formio',
      '$http',
      function(
        $scope,
        $element,
        FormioScope,
        Formio,
        $http
      ) {
        $scope._src = $scope.src || '';
        $scope.formioAlerts = [];
        // Shows the given alerts (single or array), and dismisses old alerts
        $scope.showAlerts = function(alerts) {
          $scope.formioAlerts = [].concat(alerts);
        };
        var resourceName = 'resource';
        var methodName = '';
        var loader = FormioScope.register($scope, $element, {
          form: true,
          submission: true
        });

        if (loader) {
          resourceName = loader.submissionId ? 'submission' : 'form';
          var resourceTitle = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);
          methodName = 'delete' + resourceTitle;
        }

        // Set the resource name
        $scope._resourceName = $scope.resourceName || resourceName;
        $scope.deleteMessage = $scope.message || 'Are you sure you wish to delete the ' + $scope._resourceName + '?';

        // Create delete capability.
        $scope.onDelete = function() {
          // Rebuild resourceTitle, $scope.resourceName could have changed
          var resourceName = $scope.resourceName || $scope._resourceName;
          var resourceTitle = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);
          // Called when the delete is done.
          var onDeleteDone = function(data) {
            $scope.showAlerts({
              type: 'success',
              message: resourceTitle + ' was deleted.'
            });
            Formio.clearCache();
            $scope.$emit('delete', data);
          };

          if ($scope.action) {
            $http.delete($scope.action).then(onDeleteDone, FormioScope.onError($scope, $element));
          }
          else if (loader) {
            if (!methodName) return;
            if (typeof loader[methodName] !== 'function') return;
            loader[methodName]().then(onDeleteDone, FormioScope.onError($scope, $element));
          }
        };
        $scope.onCancel = function() {
          $scope.$emit('cancel');
        };
      }
    ]
  };
};

},{}],215:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  '$compile',
  '$templateCache',
  function(
    $compile,
    $templateCache
  ) {
    return {
      scope: false,
      link: function(scope, element) {
        element.replaceWith($compile($templateCache.get(scope.template))(scope));
        scope.$emit('formElementRender', element);
      }
    };
  }
];

},{}],216:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: 'formio/errors.html'
  };
};

},{}],217:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      form: '=',
      submission: '=',
      ignore: '=?'
    },
    templateUrl: 'formio/submission.html',
    controller: [
      '$scope',
      'FormioUtils',
      function(
        $scope,
        FormioUtils
      ) {
        $scope.isVisible = function(component, row) {
          return FormioUtils.isVisible(
            component,
            row,
            $scope.submission ? $scope.submission.data : null,
            $scope.ignore
          );
        };
      }
    ]
  };
};

},{}],218:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      src: '=?',
      form: '=?',
      submissions: '=?',
      perPage: '=?'
    },
    templateUrl: 'formio/submissions.html',
    controller: [
      '$scope',
      '$element',
      'FormioScope',
      function(
        $scope,
        $element,
        FormioScope
      ) {
        $scope._src = $scope.src || '';
        $scope.formioAlerts = [];
        // Shows the given alerts (single or array), and dismisses old alerts
        this.showAlerts = $scope.showAlerts = function(alerts) {
          $scope.formioAlerts = [].concat(alerts);
        };

        $scope.perPage = $scope.perPage === undefined ? 10 : $scope.perPage;
        $scope.formio = FormioScope.register($scope, $element, {
          form: true,
          submissions: true
        });

        $scope.currentPage = 1;
        $scope.pageChanged = function(page) {
          $scope.skip = (page - 1) * $scope.perPage;
          $scope.updateSubmissions();
        };

        $scope.tableView = function(component) {
          return !component.hasOwnProperty('tableView') || component.tableView;
        };

        $scope.$watch('submissions', function(submissions) {
          if (submissions && submissions.length > 0) {
            $scope.$emit('submissionLoad', $scope.submissions);
          }
        });
      }
    ]
  };
};

},{}],219:[function(_dereq_,module,exports){
"use strict";
var isNaN = _dereq_('lodash/isNAN');
var isFinite = _dereq_('lodash/isFinite');

module.exports = function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'formio-wizard.html',
    scope: {
      src: '=?',
      url: '=?',
      formAction: '=?',
      form: '=?',
      submission: '=?',
      readOnly: '=?',
      hideComponents: '=?',
      disableComponents: '=?',
      formioOptions: '=?',
      storage: '=?'
    },
    link: function(scope, element) {
      // From https://siongui.github.io/2013/05/12/angularjs-get-element-offset-position/
      var offset = function(elm) {
        try {
          return elm.offset();
        }
        catch (e) {
          // Do nothing...
        }
        var rawDom = elm[0];
        var _x = 0;
        var _y = 0;
        var body = document.documentElement || document.body;
        var scrollX = window.pageXOffset || body.scrollLeft;
        var scrollY = window.pageYOffset || body.scrollTop;
        _x = rawDom.getBoundingClientRect().left + scrollX;
        _y = rawDom.getBoundingClientRect().top + scrollY;
        return {
          left: _x,
          top: _y
        };
      };

      scope.wizardLoaded = false;
      scope.wizardTop = offset(element).top;
      if (scope.wizardTop > 50) {
        scope.wizardTop -= 50;
      }
      scope.wizardElement = angular.element('.formio-wizard', element);
    },
    controller: [
      '$scope',
      '$compile',
      '$element',
      'Formio',
      'FormioScope',
      'FormioUtils',
      '$http',
      '$timeout',
      function(
        $scope,
        $compile,
        $element,
        Formio,
        FormioScope,
        FormioUtils,
        $http,
        $timeout
      ) {
        var session = ($scope.storage && !$scope.readOnly) ? localStorage.getItem($scope.storage) : false;
        if (session) {
          session = angular.fromJson(session);
        }

        $scope.formio = null;
        $scope.url = $scope.url || $scope.src;
        $scope.page = {};
        $scope.activePage = {};
        $scope.pages = [];
        $scope.history = [];
        $scope.hasTitles = false;
        $scope.colclass = '';
        if (!$scope.submission || !Object.keys($scope.submission).length) {
          $scope.submission = session ? {data: session.data} : {data: {}};
        }
        $scope.currentPage = session ? session.page : 0;
        $scope.formioAlerts = [];
        $scope.formioOptions = $scope.formioOptions || {};

        var getForm = function() {
          var element = $element.find('#formio-wizard-form');
          if (!element.length) {
            return {};
          }
          return element.children().scope().formioForm;
        };

        // Show the current page.
        var showPage = function(scroll) {
          // When allowing navigate on invsalid
          // prev page alert can be visible.
          // Let's clear it
          $scope.currentPage = $scope.currentPage || 0;
          $scope.showAlerts(null);
          $scope.pageWasVisited[$scope.currentPage] = true;

          $scope.wizardLoaded = false;
          $scope.page.components = [];
          $scope.page.components.length = 0;
          $timeout(function() {
            // If the page is past the components length, try to clear first.
            if ($scope.currentPage >= $scope.pages.length) {
              $scope.clear();
            }

            if ($scope.storage && !$scope.readOnly) {
              localStorage.setItem($scope.storage, angular.toJson({
                page: $scope.currentPage,
                data: $scope.submission.data
              }));
            }

            $scope.page.components = $scope.pages[$scope.currentPage].components;
            $scope.activePage = $scope.pages[$scope.currentPage];
            $scope.formioAlerts = [];
            if (scroll) {
              window.scrollTo(0, $scope.wizardTop);
            }
            $scope.wizardLoaded = true;
            $scope.$emit('wizardPage', $scope.currentPage);
            $timeout($scope.$apply.bind($scope));
          });
        };

        if (!$scope.form && $scope.src) {
          (new Formio($scope.src)).loadForm().then(function(form) {
            $scope.form = form;
            if (!$scope.wizardLoaded) {
              showPage();
            }
          });
        }

        // We can be comming back with the 'prev' button.
        // Wait for the form to be loaded.
        // Then timeout to wait the loaded form to be rendered
        // before checking for errors.
        $scope.$on('formLoad', function() {
          if ($scope.pageHasErrors[$scope.currentPage]) {
            $timeout(function() {
              $scope.checkErrors();
            });
          }
        });

        // Shows the given alerts (single or array), and dismisses old alerts
        this.showAlerts = $scope.showAlerts = function(alerts) {
          $scope.formioAlerts = [].concat(alerts);
        };

        $scope.clear = function() {
          if ($scope.storage && !$scope.readOnly) {
            localStorage.setItem($scope.storage, '');
          }
          $scope.submission = {data: {}};
          $scope.currentPage = 0;
          $scope.history = [];
        };

        // Check for errors.
        $scope.checkErrors = function() {
          if (!$scope.isValid()) {
            // Change all of the fields to not be pristine.
            angular.forEach($element.find('[name="formioForm"]').find('*'), function(element) {
              var elementScope = angular.element(element).scope();
              if (!elementScope || !elementScope.component) {
                return;
              }
              var fieldForm = elementScope.formioForm;
              if (!fieldForm) {
                return;
              }
              if (fieldForm[elementScope.component.key]) {
                fieldForm[elementScope.component.key].$pristine = false;
              }
            });
            $scope.formioAlerts = [{
              type: 'danger',
              message: 'Please fix the following errors before proceeding.'
            }];
            return true;
          }
          return false;
        };

        // Submit the submission.
        $scope.submit = function() {
          if ($scope.checkErrors()) {
            return;
          }

          // We want to submit, but free navigation is enabled.
          // Lets check if previous pages where not visited or has errors.
          // If find one, stop searching, go to that page and do not continue with the submission.
          if ($scope.formioOptions.wizardFreeNavigation) {
            var backToPage = null;
            for (var i = 0; i < $scope.pages.length; i++) {
              if ($scope.pageHasErrors[i] || !$scope.pageWasVisited[i]) {
                backToPage = i;
                break;
              }
            }
            if (backToPage !== null) {
              return $scope.goto(backToPage);
            }
          }

          FormioUtils.alter('submit', $scope, $scope.submission, function(err) {
            if (err) {
              return this.showAlerts(err.alerts);
            }

            // Create a sanitized submission object.
            var submissionData = {data: {}};
            if ($scope.submission._id) {
              submissionData._id = $scope.submission._id;
            }
            if ($scope.submission.data._id) {
              submissionData._id = $scope.submission.data._id;
            }

            var grabIds = function(input) {
              if (!input) {
                return [];
              }

              if (!(input instanceof Array)) {
                input = [input];
              }

              var final = [];
              input.forEach(function(element) {
                if (element && element._id) {
                  final.push(element._id);
                }
              });

              return final;
            };

            var defaultPermissions = {};
            FormioUtils.eachComponent($scope.form.components, function(component) {
              if (component.type === 'resource' && component.key && component.defaultPermission) {
                defaultPermissions[component.key] = component.defaultPermission;
              }
              if (submissionData.data.hasOwnProperty(component.key) && (component.type === 'number')) {
                var value = $scope.submission.data[component.key];
                if (component.type === 'number') {
                  submissionData.data[component.key] = value ? parseFloat(value) : 0;
                }
                else {
                  submissionData.data[component.key] = value;
                }
              }
            }, true);

            angular.forEach($scope.submission.data, function(value, key) {
              submissionData.data[key] = value;

              // Setup the submission access.
              var perm = defaultPermissions[key];
              if (perm) {
                submissionData.access = submissionData.access || [];

                // Coerce value into an array for plucking.
                if (!(value instanceof Array)) {
                  value = [value];
                }

                // Try to find and update an existing permission.
                var found = false;
                submissionData.access.forEach(function(permission) {
                  if (permission.type === perm) {
                    found = true;
                    permission.resources = permission.resources || [];
                    permission.resources.concat(grabIds(value));
                  }
                });

                // Add a permission, because one was not found.
                if (!found) {
                  submissionData.access.push({
                    type: perm,
                    resources: grabIds(value)
                  });
                }
              }
            });
            // Strip out any angular keys.
            submissionData = angular.copy(submissionData);

            var submitEvent = $scope.$emit('formSubmit', submissionData);
            if (submitEvent.defaultPrevented) {
              // Listener wants to cancel the form submission
              return;
            }

            var onDone = function(submission) {
              if ($scope.storage && !$scope.readOnly) {
                localStorage.setItem($scope.storage, '');
              }
              $scope.showAlerts({
                type: 'success',
                message: 'Submission Complete!'
              });
              $scope.$emit('formSubmission', submission);
            };

            // Save to specified action.
            if ($scope.action) {
              var method = submissionData._id ? 'put' : 'post';
              $http[method]($scope.action, submissionData).then(function(submission) {
                Formio.clearCache();
                onDone(submission);
              }, FormioScope.onError($scope, $element));
            }
            else if ($scope.formio && !$scope.formio.noSubmit) {
              $scope.formio.saveSubmission(submissionData).then(onDone).catch(FormioScope.onError($scope, $element));
            }
            else {
              onDone(submissionData);
            }
          }.bind(this));
        };

        $scope.cancel = function() {
          $scope.clear();
          FormioUtils.alter('cancel', $scope, function(err) {
            if (err) {
              return this.showAlerts(err.alerts);
            }
            showPage(true);
            $scope.$emit('cancel');
          }.bind(this));
        };

        $scope.pageHasErrors = {};
        $scope.pageWasVisited = {};

        $scope.getPageByKey = function(key) {
          var pageIndex = 0;
          angular.forEach($scope.pages, function(page, index) {
            if (page.key === key) {
              pageIndex = index;
              return false;
            }
          });
          return pageIndex;
        };

        /* eslint-disable max-depth */
        $scope.getNextPage = function() {
          var nextPage = $scope.currentPage;
          nextPage++;
          var currentPage = $scope.pages[$scope.currentPage];
          if (currentPage.nextPage) {
            var page = 0;
            // Allow for script execution.
            if (typeof currentPage.nextPage === 'string') {
              try {
                var next = nextPage;
                eval('(function(data) {' + currentPage.nextPage.toString() + '})($scope.submission.data)');
                page = next;
                if (!isNaN(parseInt(page, 10)) && isFinite(page)) {
                  return page;
                }
                if (typeof page !== 'string') {
                  return page;
                }

                // Assume they passed back the key of the page to go to.
                return $scope.getPageByKey(page);
              }
              catch (e) {
                /* eslint-disable no-console */
                console.warn('An error occurred in a custom nextPage function statement for component ' + $scope.page.key, e);
                /* eslint-enable no-console */
                return page;
              }
            }
            // Or use JSON Logic.
            else {
              var result = FormioUtils.jsonLogic.apply(currentPage.nextPage, {
                data: $scope.submission.data,
                page: page,
                form: $scope.page
              });
              var newPage = parseInt(result, 10);
              if (!isNaN(parseInt(newPage, 10)) && isFinite(newPage)) {
                return newPage;
              }

              return $scope.getPageByKey(result);
            }
          }
          return nextPage;
        };
        /* eslint-enable max-depth */

        // Move onto the next page.
        $scope.next = function() {
          var errors = $scope.checkErrors();
          if (errors) {
            $scope.pageHasErrors[$scope.currentPage] = true;
            if (!$scope.formioOptions.wizardFreeNavigation) {
              return;
            }
          }
          else {
            $scope.pageHasErrors[$scope.currentPage] = false;
          }

          // Get the next page.
          var nextPage = $scope.getNextPage();
          if (nextPage >= $scope.pages.length) {
            nextPage = $scope.pages.length - 1;
          }
          if (nextPage < 0) {
            nextPage = 0;
          }

          $scope.history.push($scope.currentPage);
          $scope.currentPage = nextPage;
          FormioUtils.alter('nextPage', $scope, function(err) {
            if (err) {
              return this.showAlerts(err.alerts);
            }
            showPage(true);
            $scope.$emit('wizardNext', $scope.currentPage);
          }.bind(this));
        };

        // Move onto the previous page.
        $scope.prev = function() {
          var prev = $scope.history.pop();
          $scope.currentPage = prev;
          FormioUtils.alter('prevPage', $scope, function(err) {
            if (err) {
              return this.showAlerts(err.alerts);
            }
            showPage(true);
            $scope.$emit('wizardPrev', $scope.currentPage);
          }.bind(this));
        };

        $scope.goto = function(page) {
          if (page < 0) {
            return;
          }
          if (page >= $scope.pages.length) {
            return;
          }
          var errors = $scope.checkErrors();
          $scope.pageHasErrors[$scope.currentPage] = errors;
          $scope.currentPage = page;
          showPage(true);
        };

        $scope.isValid = function() {
          return getForm().$valid;
        };

        $scope.$on('wizardGoToPage', function(event, page) {
          $scope.goto(page);
        });

        var updatePages = function() {
          if ($scope.pages.length > 6) {
            $scope.margin = ((1 - ($scope.pages.length * 0.0833333333)) / 2) * 100;
            $scope.colclass = 'col-sm-1';
          }
          else {
            $scope.margin = ((1 - ($scope.pages.length * 0.1666666667)) / 2) * 100;
            $scope.colclass = 'col-sm-2';
          }
        };

        var allPages = [];
        var hasConditionalPages = false;
        var setForm = function(form) {
          $scope.pages = [];
          angular.forEach(form.components, function(component) {
            // Only include panels for the pages.
            if (component.type === 'panel') {
              if (!$scope.hasTitles && component.title) {
                $scope.hasTitles = true;
              }
              if (component.customConditional) {
                hasConditionalPages = true;
              }
              else if (component.conditional && component.conditional.when) {
                hasConditionalPages = true;
              }
              // Make sure this page is not in the hide compoenents array.
              if (
                ($scope.hideComponents) &&
                (component.key) &&
                ($scope.hideComponents.indexOf(component.key) !== -1)
              ) {
                return;
              }
              allPages.push(component);
              $scope.pages.push(component);
            }
          });

          // FOR-71
          if (!$scope.builder) {
            $scope.$watch('submission.data', function(data) {
              if (hasConditionalPages) {
                var newPages = [];
                angular.forEach(allPages, function(page) {
                  if (FormioUtils.isVisible(page, null, data)) {
                    newPages.push(page);
                  }
                });
                $scope.pages = newPages;
                updatePages();
                setTimeout($scope.$apply.bind($scope), 10);
              }

              // Calculate values for hidden fields outside of wizard.
              angular.forEach(form.components, function(component) {
                if (component.type !== 'panel') {
                  FormioUtils.checkCalculated(component, $scope.submission, $scope.submission.data);
                }
              });
            }, true);
          }

          $scope.form = $scope.form ? angular.merge($scope.form, angular.copy(form)) : angular.copy(form);
          $scope.page = angular.copy(form);
          $scope.page.display = 'form';
          $scope.$emit('wizardFormLoad', form);
          updatePages();
          showPage();
        };

        // FOR-71
        if (!$scope.builder) {
          $scope.$watch('form', function(form) {
            if (
              $scope.src ||
              !form ||
              !Object.keys(form).length ||
              !form.components ||
              !form.components.length
            ) {
              return;
            }
            var formUrl = form.project ? '/project/' + form.project : '';
            formUrl += '/form/' + form._id;
            $scope.formio = new Formio(formUrl);
            setForm(form);
          });
        }

        // When the components length changes update the pages.
        $scope.$watch('form.components.length', updatePages);

        // Load the form.
        if ($scope.src) {
          $scope.formio = new Formio($scope.src);
          $scope.formio.loadForm().then(function(form) {
            setForm(form);
          });
        }
        else {
          $scope.src = '';
          $scope.formio = new Formio($scope.src);
        }
      }
    ]
  };
};

},{"lodash/isFinite":155,"lodash/isNAN":158}],220:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  'Formio',
  'formioComponents',
  '$timeout',
  function(
    Formio,
    formioComponents,
    $timeout
  ) {
    return {
      onError: function($scope, $element) {
        return function(error) {
          if ((error.name === 'ValidationError') && $element) {
            $element.find('#form-group-' + error.details[0].path).addClass('has-error');
            var message = 'ValidationError: ' + error.details[0].message;
            $scope.showAlerts({
              type: 'danger',
              message: message
            });
          }
          else {
            if (error instanceof Error) {
              error = error.toString();
            }
            else if (typeof error === 'object') {
              error = JSON.stringify(error);
            }
            $scope.showAlerts({
              type: 'danger',
              message: error
            });
          }
          $scope.$emit('formError', error);
        };
      },
      register: function($scope, $element, options) {
        var loader = null;
        $scope.formLoading = true;
        $scope.form = angular.isDefined($scope.form) ? $scope.form : {};
        $scope.submission = angular.isDefined($scope.submission) ? $scope.submission : {data: {}};
        $scope.submissions = angular.isDefined($scope.submissions) ? $scope.submissions : [];

        // Keep track of the elements rendered.
        var elementsRendered = 0;
        $scope.$on('formElementRender', function() {
          elementsRendered++;
          if (elementsRendered === $scope.form.components.length) {
            $timeout(function() {
              $scope.$emit('formRender', $scope.form);
            });
          }
        });

        $scope.setLoading = function(_loading) {
          $scope.formLoading = _loading;
        };

        // Used to set the form action.
        var getAction = function(action) {
          if (!action) return '';
          if (action.substr(0, 1) === '/') {
            action = Formio.getBaseUrl() + action;
          }
          return action;
        };

        // Set the action.
        $scope.action = getAction($scope.formAction);

        // Allow sub components the ability to add new form components to the form.
        var addedData = {};
        $scope.$on('addFormComponent', function(event, component) {
          if (!addedData.hasOwnProperty(component.settings.key)) {
            addedData[component.settings.key] = true;
            var defaultComponent = formioComponents.components[component.type];
            $scope.form.components.push(angular.extend(defaultComponent.settings, component.settings));
          }
        });

        // Set the action if they provided it in the form.
        $scope.$watch('form.action', function(value) {
          if (!value) return;
          var action = getAction(value);
          if (action) {
            $scope.action = action;
          }
        });

        // Trigger a form load event when the components length is more than 0.
        $scope.$watch('form.components.length', function() {
          if (
            !$scope.form ||
            !$scope.form.components ||
            !$scope.form.components.length
          ) {
            return;
          }
          $scope.setLoading(false);
          $scope.$emit('formLoad', $scope.form);
        });

        $scope.updateSubmissions = function() {
          $scope.setLoading(true);
          var params = {};
          if ($scope.perPage) params.limit = $scope.perPage;
          if ($scope.skip) params.skip = $scope.skip;
          loader.loadSubmissions({params: params}).then(function(submissions) {
            angular.merge($scope.submissions, angular.copy(submissions));
            $scope.setLoading(false);
            $scope.$emit('submissionsLoad', submissions);
          }, this.onError($scope));
        }.bind(this);

        if ($scope._src) {
          loader = new Formio($scope._src);
          if (options.form) {
            $scope.setLoading(true);

            // If a form is already provided, then skip the load.
            if ($scope.form && Object.keys($scope.form).length) {
              $scope.setLoading(false);
              $scope.$emit('formLoad', $scope.form);
            }
            else {
              loader.loadForm().then(function(form) {
                angular.merge($scope.form, angular.copy(form));
                $scope.setLoading(false);
                $scope.$emit('formLoad', $scope.form);
              }, this.onError($scope));
            }
          }
          if (options.submission && loader.submissionId) {
            $scope.setLoading(true);

            // If a submission is already provided, then skip the load.
            if ($scope.submission && Object.keys($scope.submission.data).length) {
              $scope.setLoading(false);
              $scope.$emit('submissionLoad', $scope.submission);
            }
            else {
              loader.loadSubmission().then(function(submission) {
                angular.merge($scope.submission, angular.copy(submission));
                $scope.setLoading(false);
                $scope.$emit('submissionLoad', submission);
              }, this.onError($scope));
            }
          }
          if (options.submissions) {
            $scope.updateSubmissions();
          }
        }
        else {
          // If they provide a url to the form, we still need to create it but tell it to not submit.
          if ($scope.url) {
            loader = new Formio($scope.url);
            loader.noSubmit = true;
          }

          $scope.formoLoaded = true;
          $scope.formLoading = !$scope.form || (Object.keys($scope.form).length === 0) || !$scope.form.components.length;
          $scope.setLoading($scope.formLoading);

          // Emit the events if these objects are already loaded.
          if (!$scope.formLoading) {
            $scope.$emit('formLoad', $scope.form);
          }
          if ($scope.submission) {
            $scope.$emit('submissionLoad', $scope.submission);
          }
          if ($scope.submissions) {
            $scope.$emit('submissionsLoad', $scope.submissions);
          }
        }

        // Return the loader.
        return loader;
      }
    };
  }
];

},{}],221:[function(_dereq_,module,exports){
"use strict";
var formioUtils = _dereq_('formiojs/utils');
var _filter = _dereq_('lodash/filter');
var _get = _dereq_('lodash/get');

module.exports = function() {
  var hooks = {};
  return {
    // Asynchronously iterate through a map.
    each: function(items, each, done) {
      var index = -1;
      var arrayItems = [];
      for (var i in items) {
        arrayItems.push(items[i]);
      }

      (function next(err, previous) {
        if (err) {
          err.item = previous;
          return done ? done(err) : null;
        }
        index++;
        var item = arrayItems[index];
        if (!item) {
          return done ? done() : null;
        }
        each(item, function(err) {
          next(err, item);
        });
      })();
    },
    hook: function(name, cb) {
      var parts = name.split(':');
      var key = parts[0];
      name = (parts.length > 1) ? parts[1] : key;

      if (!hooks[name]) {
        hooks[name] = {};
      }
      hooks[name][key] = cb;
    },
    alter: function() {
      var name = arguments[0];
      var fn = (typeof arguments[arguments.length - 1] === 'function') ? arguments[arguments.length - 1] : null;
      var args = Array.prototype.slice.call(arguments, 1, (arguments.length - 1));
      if (hooks && hooks[name]) {
        this.each(hooks[name], function(hook, next) {
          hook.apply(this, args.concat([next]));
        }, fn);
      }
      else {
        // If this is an async hook instead of a sync.
        if (fn) {
          return fn(null, arguments[1]);
        }
        else {
          return arguments[1];
        }
      }
    },
    pluckItems: function(defaultItems, searchItems) {
      var temp = [];
      if (!defaultItems || !defaultItems.length) {
        return temp;
      }
      if (typeof defaultItems === 'string') {
        defaultItems = [defaultItems];
      }

      defaultItems.forEach(function(item) {
        var parts = item.split(':');
        if (parts.length === 2) {
          var result = _filter(searchItems, function(potential) {
            if (_get(potential, parts[0]) === parts[1]) {
              return true;
            }
          });

          if (result) {
            temp = temp.concat(result);
          }
        }
      });

      return temp;
    },
    checkDefaultValue: function(component, submission, data, $scope, done) {
      /* eslint-disable max-depth */
      var value = '';
      if (!done) {
        done = function(added) {
          return added;
        };
      }

      // Use the current data or default.
      if (data.hasOwnProperty(component.key)) {
        if (!component.multiple) {
          return done(false);
        }

        // If the value is an array then we are good.
        if (data[component.key] instanceof Array) {
          return done(false);
        }

        // Split the value based on CSV
        data[component.key] = data[component.key].split(',');
        return done(true);
      }
      else if (component.hasOwnProperty('customDefaultValue')) {
        if (typeof component.customDefaultValue === 'string') {
          try {
            value = eval('(function(data) { var value = "";' + component.customDefaultValue + '; return value; })(data)');
          }
          catch (e) {
            /* eslint-disable no-console */
            console.warn('An error occurrend in a custom default value in ' + component.key, e);
            /* eslint-enable no-console */
            value = '';
          }
        }
        else {
          try {
            value = formioUtils.jsonLogic.apply(component.customDefaultValue, {
              data: submission ? submission.data : data,
              row: data
            });
          }
          catch (e) {
            /* eslint-disable no-console */
            console.warn('An error occurred calculating a value for ' + component.key, e);
            /* eslint-enable no-console */
            value = '';
          }
        }
        data[component.key] = component.multiple ? [value] : value;
        return done(true);
      }
      else if (component.hasOwnProperty('defaultValue')) {
        // FA-835 - The default values for select boxes are set in the component.
        if (component.type === 'selectboxes') {
          return done(false);
        }

        // If there is a default value and it is not an array, wrap the value.
        if (component.multiple && typeof component.defaultValue === 'string') {
          value = component.defaultValue.split(',');
        }
        else {
          value = component.defaultValue;
        }

        // If no default is provided, then skip...
        if (!value || !value.length) {
          return done(false);
        }

        // FOR-193 - Fix default value for the number component.
        // FOR-262 - Fix multiple default value for the number component.
        if (component.type === 'number') {
          if (!component.multiple) {
            // FOR-290 - Fix default values for number components, to allow decimal numbers.
            if (component.defaultValue.indexOf('.') !== -1) {
              data[component.key] = parseFloat(component.defaultValue);
              return done(true);
            }

            data[component.key] = parseInt(component.defaultValue);
            return done(true);
          }

          data[component.key] = value.map(function(item) {
            try {
              // FOR-290 - Fix default values for number components, to allow decimal numbers.
              if (item.indexOf('.') !== -1) {
                return parseFloat(item);
              }

              return parseInt(item);
            }
            catch (e) {
              return 0;
            }
          });
          return done(true);
        }
        // FOR-135 - Add default values for select components.
        else if (component.type === 'select') {
          // FOR-337 - Fix default values for select components without multi enabled.
          if (!component.multiple) {
            data[component.key] = component.defaultValue;
            return done(true);
          }

          // If using the values input, split the default values, and search the options for each value in the list.
          if (component.dataSrc === 'values') {
            var temp = [];

            component.data.values.forEach(function(item) {
              if (value.indexOf(item.value) !== -1) {
                temp.push(item);
              }
            });

            data[component.key] = temp;
            return done(true);
          }
          // If using json input, split the values and search each key path for the item
          else if (component.dataSrc === 'json') {
            if (typeof component.data.json === 'string') {
              try {
                component.data.json = JSON.parse(component.data.json);
              }
              catch (e) {
                /* eslint-disable no-console */
                console.log(e);
                console.log('Could not parse the given JSON for the select component: ' + component.key);
                console.log(component.data.json);
                /* eslint-enable no-console */
                component.data.json = [];
              }
            }

            data[component.key] = this.pluckItems(value, component.data.json);
            return done(true);
          }
          else if (component.dataSrc === 'url' || component.dataSrc === 'resource') {
            // Wait until loading is done.
            $scope.$on('selectLoaded', function() {
              data[component.key] = this.pluckItems(value, $scope.selectItems);
              return done(true);
            }.bind(this));
          }
        }
        // FOR-504 - Fix default values for survey components.
        else if (component.type === 'survey') {
          if (!component.hasOwnProperty('defaultValue')) {
            return done(false);
          }

          data[component.key] = data[component.key] || {};
          this.each(component.questions, function(question, next) {
            setTimeout(function() {
              data[component.key][question.value] = data[component.key][question.value] || component.defaultValue;
              return next();
            }, 1);
          }, function() {
            done(true);
          });
        }
        else {
          if (!component.multiple) {
            data[component.key] = component.defaultValue;
            return done(true);
          }

          // If there is a default value and it is an array, assign it to the value.
          if (component.defaultValue instanceof Array) {
            data[component.key] = component.defaultValue;
            return done(true);
          }

          // Make the defaultValue a single element array because were multi.
          data[component.key] = [component.defaultValue];
          return done(true);
        }
      }
      /* eslint-enable max-depth */
    },
    checkCalculated: function(component, submission, data) {
      // Process calculated value stuff if present.
      if (component.calculateValue) {
        if (typeof component.calculateValue === 'string') {
          try {
            data[component.key] = eval('(function(data) { var value = [];' + component.calculateValue.toString() + '; return value; })(data)');
          }
          catch (e) {
            /* eslint-disable no-console */
            console.warn('An error occurred calculating a value for ' + component.key, e);
            /* eslint-enable no-console */
          }
        }
        else {
          try {
            data[component.key] = formioUtils.jsonLogic.apply(component.calculateValue, {
              data: submission ? submission.data : data,
              row: data
            });
          }
          catch (e) {
            /* eslint-disable no-console */
            console.warn('An error occurred calculating a value for ' + component.key, e);
            /* eslint-enable no-console */
          }
        }
      }
    },
    checkVisible: function(component, row, data) {
      var visible = formioUtils.checkCondition(component, row, data);
      if (!visible) {
        if (!component.hasOwnProperty('clearOnHide') || component.clearOnHide.toString() === 'true') {
          if (row && row.hasOwnProperty(component.key)) {
            delete row[component.key];
          }
          if (data && data.hasOwnProperty(component.key)) {
            delete data[component.key];
          }
        }
        return false;
      }
      return true;
    },
    isVisible: function(component, row, data, hide) {
      // If the component is in the hideComponents array, then hide it by default.
      if (hide && Array.isArray(hide) && (hide.indexOf(component.key) !== -1)) {
        return false;
      }

      return this.checkVisible(component, row, data);
    },
    flattenComponents: formioUtils.flattenComponents,
    eachComponent: formioUtils.eachComponent,
    getComponent: formioUtils.getComponent,
    getValue: formioUtils.getValue,
    jsonLogic: formioUtils.jsonLogic,
    hideFields: function(form, components) {
      this.eachComponent(form.components, function(component) {
        for (var i in components) {
          if (component.key === components[i]) {
            component.type = 'hidden';
          }
        }
      });
    },
    uniqueName: function(name) {
      var parts = name.toLowerCase().replace(/[^0-9a-z\.]/g, '').split('.');
      var fileName = parts[0];
      var ext = '';
      if (parts.length > 1) {
        ext = '.' + parts[(parts.length - 1)];
      }
      return fileName.substr(0, 10) + '-' + this.guid() + ext;
    },
    guid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    },
    fieldWrap: function(input) {
      var multiInput = input.replace('data[component.key]', 'data[component.key][$index]');
      var inputLabel = '<label ng-if="component.label && !component.hideLabel" for="{{ component.key }}" class="control-label" ng-class="{\'field-required\': isRequired(component)}">{{ component.label | formioTranslate:null:builder }}</label>';
      var requiredInline = '<span ng-if="(component.hideLabel === true || component.label === \'\' || !component.label) && isRequired(component)" class="glyphicon glyphicon-asterisk form-control-feedback field-required-inline" aria-hidden="true"></span>';
      var template =
        '<div ng-if="!component.multiple">' +
          inputLabel +
          '<div class="input-group">' +
            '<div class="input-group-addon" ng-if="!!component.prefix">{{ component.prefix }}</div>' +
            input +
            requiredInline +
            '<div class="input-group-addon" ng-if="!!component.suffix">{{ component.suffix }}</div>' +
          '</div>' +
          '<div class="formio-errors">' +
            '<formio-errors ng-if="::!builder"></formio-errors>' +
          '</div>' +
        '</div>' +
        '<div ng-if="!!component.description" class="help-block">' +
          '<span>{{ component.description }}</span>' +
        '</div>' +
        '<div ng-if="component.multiple"><table class="table table-bordered">' +
          inputLabel +
          '<tr ng-repeat="value in data[component.key] track by $index">' +
            '<td>' +
              '<div class="input-group">' +
                '<div class="input-group-addon" ng-if="!!component.prefix">{{ component.prefix }}</div>' +
                  multiInput +
                  requiredInline +
                '<div class="input-group-addon" ng-if="!!component.suffix">{{ component.suffix }}</div>' +
              '</div>' +
              '<div class="formio-errors">' +
                '<formio-errors ng-if="::!builder"></formio-errors>' +
              '</div>' +
            '</td>' +
            '<td><a ng-click="removeFieldValue($index)" class="btn btn-default"><span class="glyphicon glyphicon-remove-circle"></span></a></td>' +
          '</tr>' +
          '<tr>' +
            '<td colspan="2"><a ng-click="addFieldValue()" class="btn btn-primary"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> {{ component.addAnother || "Add Another" | formioTranslate:null:builder }}</a></td>' +
          '</tr>' +
        '</table></div>';
      return template;
    },

    /**
     * Check if a component is required
     *
     * @param {Object} component The component to be checked
     * @param {Array} componentsToRequire An array of component keys manually set to mark specific components as required
     */
    isRequired: function(component, componentsToRequire) {
      return (component.validate && component.validate.required) || (Array.isArray(componentsToRequire) && componentsToRequire.indexOf(component.key) !== -1);
    }
  };
};

},{"formiojs/utils":1,"lodash/filter":146,"lodash/get":147}],222:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  var generic = function(data, component) {
    if (typeof data === 'string') {
      return data;
    }
    var startTable = function(labels) {
      if (!(labels instanceof Array)) {
        labels = [labels];
      }

      var view = '<table class="table table-striped table-bordered"><thead><tr>';

      labels.forEach(function(item) {
        view += '<th>' + item + '</th>';
      });

      view += '</tr></thead>';
      view += '<tbody>';
      return view;
    };

    var finishTable = function() {
      return '</tbody></table>';
    };

    var makeRow = function(data, noRow) {
      var view = !noRow ? '<tr>' : '';

      if (typeof data === 'string' || typeof data === 'number') {
        view += '<td>' + data + '</td>';
      }
      else if (data === null || data === undefined) {
        view += '<td></td>';
      }
      else if (data instanceof Array) {
        data.forEach(function(item) {
          view += makeRow(item);
        });
      }
      else if (typeof data === 'object' && data !== null && data !== undefined) {
        var labels = Object.keys(data);

        view += '<td>' + startTable(labels);
        labels.forEach(function(key) {
          view += makeRow(data[key], true);
        });
        view += finishTable() + '</td>';
      }

      view += !noRow ? '</tr>' : '';
      return view;
    };

    // Create a template
    var view = '';
    var label;
    if (!label && component && component.label) {
      label = component.label;
    }
    else if (!label && component && component.key) {
      label = component.key;
    }
    else {
      label = '';
    }

    view += startTable(label);
    view += makeRow(data);
    view += finishTable();
    return view;
  };

  // Generate a column for the component.
  var columnForComponent = function(data, component, $interpolate, componentInfo, tableChild) {
    // If no component is given, generate an empty cell.
    if (!component) {
      return '<td></td>';
    }

    // Generate a table for each component with one column to display the key/value for each component.
    var view = '<td>';
    view += '<table class="table table-striped table-bordered' + (tableChild ? ' table-child' : '') + '">';
    view += '<thead><tr>';
    view += '<th>' + (component.label || '') + ' (' + component.key + ')</th>';
    view += '</tr></thead>';
    view += '<tbody>';

    // If the component has a defined tableView, use that, otherwise try and use the raw data as a string.
    var info = componentInfo.components.hasOwnProperty(component.type)
      ? componentInfo.components[component.type]
      : {};
    if (info.tableView) {
      view += '<td>' +
        info.tableView(
          data && component.key && (data.hasOwnProperty(component.key) ? data[component.key] : data),
          component,
          $interpolate,
          componentInfo,
          tableChild
        ) + '</td>';
    }
    else {
      view += '<td>';
      if (component.prefix) {
        view += component.prefix;
      }
      view += data && component.key && (data.hasOwnProperty(component.key) ? data[component.key] : '');
      if (component.suffix) {
        view += ' ' + component.suffix;
      }
      view += '</td>';
    }

    view += '</tbody></table>';
    view += '</td>';
    return view;
  };

  return {
    generic: generic,
    columnForComponent: columnForComponent
  };
};

},{}],223:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  '$q',
  '$rootScope',
  'Formio',
  function($q, $rootScope, Formio) {
    var Interceptor = {
      /**
       * Update JWT token received from response.
       */
      response: function(response) {
        var token = response.headers('x-jwt-token');
        if (response.status >= 200 && response.status < 300 && token && token !== '') {
          Formio.setToken(token);
        }
        return response;
      },

      /**
       * Intercept a response error.
       */
      responseError: function(response) {
        if (parseInt(response.status, 10) === 440) {
          response.loggedOut = true;
          Formio.setToken(null);
          $rootScope.$broadcast('formio.sessionExpired', response.body);
        }
        else if (parseInt(response.status, 10) === 401) {
          $rootScope.$broadcast('formio.unauthorized', response.body);
        }
        return $q.reject(response);
      },

      /**
       * Set the token in the request headers.
       */
      request: function(config) {
        if (config.disableJWT) return config;
        var token = Formio.getToken();
        if (token) config.headers['x-jwt-token'] = token;
        return config;
      }
    };

    return Interceptor;
  }
];

},{}],224:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  'Formio',
  'formioComponents',
  '$interpolate',
  function(
    Formio,
    formioComponents,
    $interpolate
  ) {
    return function(value, component) {
      if (!value && value !== 0 && value !== false) {
        return '';
      }
      if (!component || !component.input|| !component.type) {
        return value;
      }
      var componentInfo = formioComponents.components[component.type];
      if (!componentInfo.tableView) {
        return value;
      }
      if (component.multiple && (value.length > 0)) {
        var values = [];
        angular.forEach(value, function(arrayValue) {
          values.push(componentInfo.tableView(arrayValue, component, $interpolate, formioComponents));
        });
        return values;
      }
      return componentInfo.tableView(value, component, $interpolate, formioComponents);
    };
  }
];

},{}],225:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  'FormioUtils',
  function(FormioUtils) {
    return FormioUtils.flattenComponents;
  }
];

},{}],226:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  '$sce',
  function(
    $sce
  ) {
    return function(html) {
      return $sce.trustAsHtml(html);
    };
  }
];

},{}],227:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  function() {
    return function(components) {
      var tableComps = [];
      if (!components || !components.length) {
        return tableComps;
      }
      components.forEach(function(component) {
        if (component.tableView) {
          tableComps.push(component);
        }
      });
      return tableComps;
    };
  }
];

},{}],228:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  'formioTableView',
  function(
    formioTableView
  ) {
    return function(value, component) {
      return formioTableView(value, component);
    };
  }
];

},{}],229:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  'Formio',
  'formioTableView',
  function(
    Formio,
    formioTableView
  ) {
    return function(data, component) {
      return formioTableView(Formio.fieldData(data, component), component);
    };
  }
];

},{}],230:[function(_dereq_,module,exports){
"use strict";
module.exports = [
  '$filter',
  '$injector',
  function(
    $filter,
    $injector
  ) {
    return function(text, key, builder) {
      /**
       * Lookup the available translate libraries, currently supports:
       * angular-translate: @see https://github.com/angular-translate/angular-translate
       * angular-gettext: @see https://github.com/rubenv/angular-gettext
       */
      var $translate, gettextCatalog;
      if ($injector.has('$translate')) {
        $translate = $injector.get('$translate');
      }
      else if ($injector.has('gettextCatalog')) {
        gettextCatalog = $injector.get('gettextCatalog');
      }
      if (builder) return text;
      try {
        // Translate text using either angular-translate or angular-gettext
        var translateText = function(text) {
          if ($translate) return $translate.instant(text);
          if (gettextCatalog) return gettextCatalog.getString(text);
          return text;
        };

        // Allow translating by field key which helps with large blocks of html.
        if (key) {
          var result = translateText(key);
          if (result === key) {
            result = translateText(text);
          }
          return result;
        }

        return translateText(text);
      }
      catch (e) {
        return text;
      }
    };
  }
];

},{}],231:[function(_dereq_,module,exports){
"use strict";
module.exports = ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl(val);
  };
}];

},{}],232:[function(_dereq_,module,exports){
"use strict";
_dereq_('./polyfills/polyfills');


var app = angular.module('formio', [
  'ngSanitize',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'ui.select',
  'ui.mask',
  'angularMoment',
  'ngDialog',
  'ngFileUpload',
  'ngFileSaver'
]);

/**
 * Create the formio providers.
 */
app.provider('Formio', _dereq_('./providers/Formio'));

/**
 * Provides a way to register the Formio scope.
 */
app.factory('FormioScope', _dereq_('./factories/FormioScope'));

app.factory('FormioUtils', _dereq_('./factories/FormioUtils'));

app.factory('formioInterceptor', _dereq_('./factories/formioInterceptor'));

app.factory('formioTableView', _dereq_('./factories/formioTableView'));

app.directive('formio', _dereq_('./directives/formio'));

app.directive('formioDelete', _dereq_('./directives/formioDelete'));

app.directive('formioErrors', _dereq_('./directives/formioErrors'));

app.directive('customValidator', _dereq_('./directives/customValidator'));

app.directive('formioSubmissions', _dereq_('./directives/formioSubmissions'));

app.directive('formioSubmission', _dereq_('./directives/formioSubmission'));

app.directive('formioComponent', _dereq_('./directives/formioComponent'));

app.directive('formioComponentView', _dereq_('./directives/formioComponentView'));

app.directive('formioElement', _dereq_('./directives/formioElement'));

app.directive('formioWizard', _dereq_('./directives/formioWizard'));

app.directive('formioBindHtml', _dereq_('./directives/formioBindHtml.js'));

/**
 * Filter to flatten form components.
 */
app.filter('flattenComponents', _dereq_('./filters/flattenComponents'));
app.filter('tableComponents', _dereq_('./filters/tableComponents'));
app.filter('tableView', _dereq_('./filters/tableView'));
app.filter('tableFieldView', _dereq_('./filters/tableFieldView'));
app.filter('safehtml', _dereq_('./filters/safehtml'));
app.filter('formioTranslate', _dereq_('./filters/translate'));
app.filter('trustAsResourceUrl', _dereq_('./filters/trusturl'));
app.config([
  '$httpProvider',
  '$injector',
  function(
    $httpProvider,
    $injector
  ) {
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }

    // Make sure that ngAnimate doesn't mess up loader.
    try {
      $injector.get('$animateProvider').classNameFilter(/^((?!(fa-spinner|glyphicon-spin)).)*$/);
    }
    /* eslint-disable no-empty */
    catch (err) {}
    /* eslint-enable no-empty */

    // Disable IE caching for GET requests.
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get.Pragma = 'no-cache';
    $httpProvider.interceptors.push('formioInterceptor');
  }
]);

app.run([
  '$templateCache',
  '$rootScope',
  '$window',
  function($templateCache, $rootScope, $window) {
    $window.addEventListener('message', function(event) {
      var eventData = null;
      try {
        eventData = JSON.parse(event.data);
      }
      catch (err) {
        eventData = null;
      }
      if (eventData && eventData.name) {
        $rootScope.$broadcast('iframe-' + eventData.name, eventData.data);
      }
    });

    // The template for the formio forms.
    $templateCache.put('formio.html',
      "<div>\r\n  <i style=\"font-size: 2em;\" ng-if=\"formLoading\" ng-class=\"{'formio-hidden': !formLoading}\" class=\"formio-loading glyphicon glyphicon-refresh glyphicon-spin\"></i>\r\n  <formio-wizard ng-if=\"form.display === 'wizard'\" src=\"src\" form=\"form\" submission=\"submission\" form-action=\"formAction\" read-only=\"readOnly\" hide-components=\"hideComponents\" disable-components=\"disableComponents\" formio-options=\"formioOptions\" storage=\"form.name\"></formio-wizard>\r\n  <div ng-if=\"form.display === 'pdf' && form.settings.pdf\" style=\"position:relative;\">\r\n    <span style=\"position:absolute;right:10px;top:10px;cursor:pointer;\" class=\"btn btn-default no-disable\" ng-click=\"zoomIn()\"><spann class=\"glyphicon glyphicon-zoom-in\"></spann></span>\r\n    <span style=\"position:absolute;right:10px;top:60px;cursor:pointer;\" class=\"btn btn-default no-disable\" ng-click=\"zoomOut()\"><span class=\"glyphicon glyphicon-zoom-out\"></span></span>\r\n    <a ng-if=\"downloadUrl\" style=\"position:absolute;right:10px;top:110px;cursor:pointer;\" class=\"btn btn-primary no-disable\" href=\"{{ downloadUrl | trustAsResourceUrl }}\" target=\"_blank\"><span class=\"glyphicon glyphicon-cloud-download\"></span></a>\r\n    <iframe src=\"{{ getIframeSrc(form.settings.pdf) | trustAsResourceUrl }}\" seamless class=\"formio-iframe\"></iframe>\r\n    <button ng-if=\"!readOnly && !form.builder\" type=\"button\" class=\"btn btn-primary\" ng-click=\"submitIFrameForm()\">Submit</button>\r\n  </div>\r\n  <form ng-if=\"!form.display || (form.display === 'form')\" role=\"form\" name=\"formioForm\" ng-submit=\"onSubmit(formioForm)\" novalidate>\r\n    <div ng-repeat=\"alert in formioAlerts track by $index\" class=\"alert alert-{{ alert.type }}\" role=\"alert\" ng-if=\"::!builder\">\r\n      {{ alert.message | formioTranslate:null:builder }}\r\n    </div>\r\n    <!-- DO NOT PUT \"track by $index\" HERE SINCE DYNAMICALLY ADDING/REMOVING COMPONENTS WILL BREAK -->\r\n    <formio-component\r\n      ng-repeat=\"component in form.components track by $index\"\r\n      component=\"component\"\r\n      ng-if=\"builder ? '::true' : isVisible(component)\"\r\n      data=\"submission.data\"\r\n      formio-form=\"formioForm\"\r\n      formio=\"formio\"\r\n      submission=\"submission\"\r\n      hide-components=\"hideComponents\"\r\n      read-only=\"isDisabled(component, submission.data)\"\r\n      builder=\"builder\"\r\n    ></formio-component>\r\n  </form>\r\n</div>\r\n"
    );

    $templateCache.put('formio-wizard.html',
      "<div class=\"formio-wizard-wrapper\">\r\n  <div class=\"row bs-wizard\" style=\"border-bottom:0;\" ng-class=\"{hasTitles: hasTitles}\" ng-if=\"activePage.breadcrumb !== 'none'\">\r\n    <div ng-class=\"{disabled: ($index > currentPage) && !formioOptions.wizardFreeNavigation, active: ($index == currentPage), complete: ($index < currentPage), noTitle: !page.title}\" class=\"{{ colclass }} bs-wizard-step\" ng-repeat=\"page in pages track by $index\">\r\n      <div class=\"bs-wizard-stepnum-wrapper\">\r\n        <div class=\"text-center bs-wizard-stepnum\" ng-if=\"page.title\">{{ page.title }}</div>\r\n      </div>\r\n      <div class=\"progress\"><div class=\"progress-bar progress-bar-primary\"></div></div>\r\n      <a ng-click=\"goto($index)\" class=\"bs-wizard-dot bg-primary\"><div class=\"bs-wizard-dot-inner\"\r\n        ng-class=\"{\r\n          'bg-success': !pageHasErrors[$index],\r\n          'bg-danger': pageHasErrors[$index],\r\n          'bg-warning': !pageWasVisited[$index] && currentPage > $index\r\n        }\"></div></a>\r\n    </div>\r\n  </div>\r\n  <style type=\"text/css\">.bs-wizard > .bs-wizard-step:first-child { margin-left: {{ margin }}%; }</style>\r\n  <i ng-show=\"!wizardLoaded\" id=\"formio-loading\" style=\"font-size: 2em;\" class=\"glyphicon glyphicon-refresh glyphicon-spin\"></i>\r\n  <div ng-repeat=\"alert in formioAlerts track by $index\" class=\"alert alert-{{ alert.type }}\" role=\"alert\">{{ alert.message | formioTranslate:null:builder }}</div>\r\n  <div class=\"formio-wizard\">\r\n    <formio\r\n      ng-if=\"wizardLoaded\"\r\n      submission=\"submission\"\r\n      form=\"page\"\r\n      url=\"url\"\r\n      read-only=\"readOnly\"\r\n      hide-components=\"hideComponents\"\r\n      disable-components=\"disableComponents\"\r\n      formio-options=\"formioOptions\"\r\n      id=\"formio-wizard-form\"\r\n    ></formio>\r\n  </div>\r\n  <ul ng-show=\"wizardLoaded\" class=\"list-inline\">\r\n    <li><a class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</a></li>\r\n    <li ng-if=\"currentPage > 0\"><a class=\"btn btn-primary\" ng-click=\"prev()\">Previous</a></li>\r\n    <li ng-if=\"currentPage < (pages.length - 1)\">\r\n      <a class=\"btn btn-primary\" ng-click=\"next()\">Next</a>\r\n    </li>\r\n    <li ng-if=\"currentPage >= (pages.length - 1)\">\r\n      <a class=\"btn btn-primary\" ng-click=\"submit()\">Submit Form</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"
    );

    $templateCache.put('formio-delete.html',
      "<form role=\"form\">\r\n  <div ng-repeat=\"alert in formioAlerts track by $index\" class=\"alert alert-{{ alert.type }}\" role=\"alert\">\r\n    {{ alert.message | formioTranslate:null:builder }}\r\n  </div>\r\n  <h3>{{ deleteMessage | formioTranslate:null:builder }}</h3>\r\n  <div class=\"btn-toolbar\">\r\n    <button ng-click=\"onDelete()\" class=\"btn btn-danger\">{{ 'Yes' | formioTranslate:null:builder }}</button>\r\n    <button ng-click=\"onCancel()\" class=\"btn btn-default\">{{ 'No' | formioTranslate:null:builder }}</button>\r\n  </div>\r\n</form>\r\n"
    );

    $templateCache.put('formio/submission.html',
      "<div>\r\n  <div ng-repeat=\"component in form.components track by $index\" ng-if=\"submission && submission.data\">\r\n    <formio-component-view\r\n      form=\"form\"\r\n      component=\"component\"\r\n      data=\"submission.data\"\r\n      ignore=\"ignore\"\r\n      submission=\"submission\"\r\n      ng-if=\"builder ? '::true' : isVisible(component)\"\r\n      builder=\"builder\"\r\n    ></formio-component-view>\r\n  </div>\r\n</div>\r\n"
    );

    $templateCache.put('formio/submissions.html',
      "<div>\r\n  <div ng-repeat=\"alert in formioAlerts track by $index\" class=\"alert alert-{{ alert.type }}\" role=\"alert\">\r\n    {{ alert.message | formioTranslate:null:builder }}\r\n  </div>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th ng-repeat=\"component in form.components | flattenComponents track by $index\" ng-if=\"tableView(component)\">{{ component.label || component.key }}</th>\r\n        <th>Submitted</th>\r\n        <th>Updated</th>\r\n        <th>Operations</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr ng-repeat=\"submission in submissions track by $index\" class=\"formio-submission\" ng-click=\"$emit('submissionView', submission)\">\r\n        <td ng-repeat=\"component in form.components | flattenComponents track by $index\" ng-if=\"tableView(component)\">{{ submission.data | tableView:component }}</td>\r\n        <td>{{ submission.created | amDateFormat:'l, h:mm:ss a' }}</td>\r\n        <td>{{ submission.modified | amDateFormat:'l, h:mm:ss a' }}</td>\r\n        <td>\r\n          <div class=\"button-group\" style=\"display:flex;\">\r\n            <a ng-click=\"$emit('submissionView', submission); $event.stopPropagation();\" class=\"btn btn-primary btn-xs\"><span class=\"glyphicon glyphicon-eye-open\"></span></a>&nbsp;\r\n            <a ng-click=\"$emit('submissionEdit', submission); $event.stopPropagation();\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-edit\"></span></a>&nbsp;\r\n            <a ng-click=\"$emit('submissionDelete', submission); $event.stopPropagation();\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove-circle\"></span></a>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination\r\n    ng-if=\"submissions.serverCount > perPage\"\r\n    ng-model=\"currentPage\"\r\n    ng-change=\"pageChanged(currentPage)\"\r\n    total-items=\"submissions.serverCount\"\r\n    items-per-page=\"perPage\"\r\n    direction-links=\"false\"\r\n    boundary-links=\"true\"\r\n    first-text=\"&laquo;\"\r\n    last-text=\"&raquo;\"\r\n    >\r\n  </pagination>\r\n</div>\r\n"
    );

    // A formio component template.
    $templateCache.put('formio/component.html',
      "<div class=\"form-group form-field-type-{{ component.type }} formio-component-{{ component.key }} {{component.customClass}}\" id=\"form-group-{{ componentId }}\"\r\n     ng-class=\"{'has-feedback ': (component.hideLabel === true || component.label === '' || !component.label) && component.validate.required,\r\n             'has-error': (formioForm[componentId].$invalid || invalidQuestions(formioForm)) && !formioForm[componentId].$pristine }\"\r\n     ng-style=\"component.style\"\r\n     ng-hide=\"component.hidden\">\r\n  <formio-element></formio-element>\r\n</div>\r\n\r\n"
    );

    $templateCache.put('formio/component-view.html',
      "<div name=\"{{ componentId }}\" class=\"form-group has-feedback form-field-type-{{ component.type }} {{component.customClass}} formio-component-{{ component.key }}\" id=\"form-group-{{ componentId }}\" ng-style=\"component.style\">\r\n  <formio-element></formio-element>\r\n</div>\r\n"
    );

    $templateCache.put('formio/element-view.html',
      "<div>\r\n  <div ng-if=\"component.label\"><strong>{{ component.label }}</strong></div>\r\n  <div formio-bind-html=\"data | tableView:component\"></div>\r\n</div>\r\n"
    );

    $templateCache.put('formio/errors.html',
      "<div ng-show=\"formioForm[componentId].$error && !formioForm[componentId].$pristine\">\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.email\">{{ component.label || component.placeholder || component.key }} {{'must be a valid email' | formioTranslate:null:builder}}.</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.required\">{{ component.label || component.placeholder || component.key }} {{'is required' | formioTranslate:null:builder}}.</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.number\">{{ component.label || component.placeholder || component.key }} {{'must be a number' | formioTranslate:null:builder}}.</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.maxlength\">{{ component.label || component.placeholder || component.key }} {{'must be shorter than' | formioTranslate:null:builder}} {{ component.validate.maxLength + 1 }} {{'characters' | formioTranslate:null:builder}}.</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.minlength\">{{ component.label || component.placeholder || component.key }} {{'must be longer than' | formioTranslate:null:builder}} {{ component.validate.minLength - 1 }} {{'characters' | formioTranslate:null:builder}}.</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.min\">{{ component.label || component.placeholder || component.key }} {{'must be greater than or equal to' | formioTranslate:null:builder}} {{ component.validate.min }}.</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.max\">{{ component.label || component.placeholder || component.key }} {{'must be less than or equal to' | formioTranslate:null:builder}} {{ component.validate.max }}.</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.custom\">{{ component.customError | formioTranslate }}</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.pattern\">{{ component.label || component.placeholder || component.key }} {{'does not match the pattern' | formioTranslate:null:builder}} {{ component.validate.pattern }}</p>\r\n  <p class=\"help-block\" ng-show=\"formioForm[componentId].$error.day\">{{ component.label || component.placeholder || component.key }} {{'must be a valid date' | formioTranslate:null:builder}}.</p>\r\n</div>\r\n"
    );
  }
]);

_dereq_('./components');

},{"./components":192,"./directives/customValidator":209,"./directives/formio":210,"./directives/formioBindHtml.js":211,"./directives/formioComponent":212,"./directives/formioComponentView":213,"./directives/formioDelete":214,"./directives/formioElement":215,"./directives/formioErrors":216,"./directives/formioSubmission":217,"./directives/formioSubmissions":218,"./directives/formioWizard":219,"./factories/FormioScope":220,"./factories/FormioUtils":221,"./factories/formioInterceptor":223,"./factories/formioTableView":224,"./filters/flattenComponents":225,"./filters/safehtml":226,"./filters/tableComponents":227,"./filters/tableFieldView":228,"./filters/tableView":229,"./filters/translate":230,"./filters/trusturl":231,"./polyfills/polyfills":234,"./providers/Formio":235}],233:[function(_dereq_,module,exports){
"use strict";
'use strict';

if (typeof Object.assign != 'function') {
  (function() {
    Object.assign = function(target) {
      'use strict';
      // We must check against these specific cases.
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      /* eslint-disable max-depth */
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      /* eslint-enable max-depth */
      return output;
    };
  })();
}

},{}],234:[function(_dereq_,module,exports){
"use strict";
'use strict';

_dereq_('./Object.assign');

},{"./Object.assign":233}],235:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
  // The formio class.
  var Formio = _dereq_('formiojs');

  // Return the provider interface.
  return {

    // Expose Formio configuration functions
    setBaseUrl: Formio.setBaseUrl,
    getBaseUrl: Formio.getBaseUrl,
    setApiUrl: Formio.setBaseUrl,
    getApiUrl: Formio.getBaseUrl,
    setAppUrl: Formio.setAppUrl,
    setProjectUrl: Formio.setProjectUrl,
    getAppUrl: Formio.getAppUrl,
    getProjectUrl: Formio.getProjectUrl,
    registerPlugin: Formio.registerPlugin,
    getPlugin: Formio.getPlugin,
    providers: Formio.providers,
    setDomain: function() {
      // Remove this?
    },

    $get: [
      '$rootScope',
      '$q',
      function(
        $rootScope,
        $q
      ) {
        var wrapQPromise = function(promise) {
          return $q.when(promise)
          .catch(function(error) {
            if (error === 'Unauthorized') {
              $rootScope.$broadcast('formio.unauthorized', error);
            }
            else if (error === 'Login Timeout') {
              $rootScope.$broadcast('formio.sessionExpired', error);
            }
            // Propagate error
            throw error;
          });
        };

        Formio.registerPlugin({
          priority: -100,
          // Wrap Formio.request's promises with $q so $apply gets called correctly.
          wrapRequestPromise: wrapQPromise,
          wrapStaticRequestPromise: wrapQPromise
        }, 'ngFormioPromiseWrapper');

        // Broadcast offline events from $rootScope
        Formio.events.onAny(function() {
          var event = 'formio.' + this.event;
          var args = [].splice.call(arguments, 0);
          args.unshift(event);
          $rootScope.$apply(function() {
            $rootScope.$broadcast.apply($rootScope, args);
          });
        });

        // Return the formio interface.
        return Formio;
      }
    ]
  };
};

},{"formiojs":undefined}]},{},[232])(232)
});