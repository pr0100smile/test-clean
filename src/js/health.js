export default function dispHealth(units) {
    let result;
    if (units.health > 50) {
      result = 'healthy';
    }
    if (units.health <= 50 && units.health > 15) {
      result = 'wounded';
    }
    if (units.health <= 15 && units.health > 0) {
      result = 'critical';
    }
    if (Number.isNaN(units.health) || units.health === undefined || units.health < 0 || typeof (units.health) !== 'number') {
      throw new Error('The value is not a number!');
    }
    return result;
  }