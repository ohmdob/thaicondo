import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { quadIn } from "svelte/easing";
/** Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * 
 * Props: value, classes, titleClasses, acrionsClasses, opacity, persistent, transitionProps
 */
export default class Dialog extends SvelteTypedComponent<DialogProps, DialogEvents, DialogSlots> {
}
declare const _DialogProps: {
    /** If true, dialog is shown. Boundable */
    value: boolean;
    /** List of classes to pass down to dialog div(blank space separated). 
     * 
     * Default: "items-center z-50 rounded bg-white dark:bg-dark-400 p-4 elevation-4" */
    classes?: string;
    /** List of classes to pass down to dialog title(blank space separated). 
     * 
     * Default: "text-lg font-bold pb-4" */
    titleClasses?: string;
        /** List of classes to pass down to dialog actions(blank space separated). 
     * 
     * Default: "text-lg font-bold pb-4" */
    actionsClasses?: string;
    /** Opacity, between 0 and 1.
     * 
     * Default: .5
     */
    opacity?: number;
    /** Persistent dialog will not close if clicked somewhere outside.
     * 
     * Default: false
     */
    persistent?: boolean;
    /** Transistion Props.
     * 
     * Default: { duration: 150, easing: quadIn, delay: 150 }
    */
    transitionProps?: {
        duration: number;
        easing: typeof quadIn;
        delay?: number;
    };
} & SvelteAllProps;
declare const _DialogEvents: {};
declare const _DialogSlots: {
    title: {};
    default: {};
    actions: {};
};
export declare type DialogProps = typeof _DialogProps;
export declare type DialogEvents = typeof _DialogEvents;
export declare type DialogSlots = typeof _DialogSlots;
export {};
