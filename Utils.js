const Utils = {
  isTextOnly (nodes) {
    try {
      if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
          if (
            nodes[i] &&
            typeof nodes[i].hasOwnProperty === 'function' &&
            Object.prototype.hasOwnProperty.call(nodes[i], 'type') &&
            typeof nodes[i].type.hasOwnProperty === 'function' &&
            (Object.prototype.hasOwnProperty.call(
              nodes[i].type,
              'displayName'
            ) ||
              Object.prototype.hasOwnProperty.call(nodes[i].type, 'name'))
          ) {
            if (
              nodes[i].type.displayName !== 'Text' &&
              nodes[i].type.name !== 'Text'
            ) {
              return false
            }
          } else {
            return false
          }
        }
      }
    } catch (e) {
      return false
    }

    // It's a miracle, I guess we're text only
    return true
  },

  concatStyles: function concatStyles (extras, newStyle) {
    let newExtras
    if (extras) {
      newExtras = JSON.parse(JSON.stringify(extras))

      if (extras.style) {
        newExtras.style.push(newStyle)
      } else {
        newExtras.style = [newStyle]
      }
    } else {
      newExtras = {
        style: [newStyle]
      }
    }
    return newExtras
  },

  logDebug: function logDebug (nodeTree, level = 0) {
    for (let i = 0; i < nodeTree.length; i++) {
      const node = nodeTree[i]

      if (node) {
        const prefix = Array(level).join('-')
        console.log(
          prefix + '> ' + node.key + ', NODE TYPE: ' + node.type.displayName
        )
        if (Array.isArray(node.props.children)) {
          this.logDebug(node.props.children, level + 1)
        }
      }
    }
  }
}

module.exports = Utils
