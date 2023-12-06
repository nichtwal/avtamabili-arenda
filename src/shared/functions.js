
export function classNames(cls, mods = {}, additional = []) {
    const classes = [cls, ...additional.filter(Boolean)];
    var newClass = ''
    for (const value of Object.values(mods)) {
      if (value) {
        newClass+=value
      }
    }
    classes.push(newClass)
    return classes.join(' ');
  }