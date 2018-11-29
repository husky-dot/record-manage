import { Message } from 'element-ui';

export const tip = type => text => Message[type](text);

export const success = tip('success')
export const warning = tip('warning')
export const info = tip('info')
export const error = tip('error')

