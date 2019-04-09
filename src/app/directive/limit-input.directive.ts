import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';

@Directive({
    selector: '[appLimitInput]'
})
export class LimitInputDirective implements ControlValueAccessor {

    // 限制输入的正则表达式
    _regexp: RegExp;
    // 正在选词输入的标志
    _isComposite: boolean = false;

    /**
     * 可以是字符串或自定义的正则表达式
     * -- 字符串的时候就找内置的一些正则表达式
     * -- 正则表达式的时候直接使用
     */
    @Input() replace: string|RegExp;

    /**
     * 对复杂的业务传入方法
     */
    @Input() replaceFn: Function;

    @Input() noCopy: boolean = false;
    // 表单检测默认为blur（因为目前系统中大部分表单都是blur的时候验证）
    @Input() updateOn: 'blur' | 'change' = 'blur';

    writeValue(value: any): void {
        this.render.setProperty(this.el.nativeElement, 'value', value);
    }

    constructor(
        private el: ElementRef,
        private control: NgControl,
        private render: Renderer2,
    ) {
    }

    /**
     * 复制（ctrl+v）事件
     */
    @HostListener('paste', ['$event']) onPaste($event) {
        if (this.noCopy) {
            $event.preventDefault();
        }
    }

    /**
     * 选词输入开始
     */
    @HostListener('compositionstart') onCompositionStart() {
        this._isComposite = true;
    }

    /**
     * 选词输入结束（确定输入或取消输入）
     */
    @HostListener('compositionend', ['$event']) onCompositionEnd($event) {
        this._isComposite = false;
        this.limitInput($event);

    }

    @HostListener('change', ['$event']) onChange($event) {
        if (this.control.control.value !== this.el.nativeElement.value) {
            this.control.control.setValue(this.el.nativeElement.value);
        }
    }

    /**
     * 应对输入被格式化导致不接发change事件的问题。所以这里在blur的时候也进行重新赋值
     * @param $event
     */
    @HostListener('blur', ['$event']) onBlur($event) {
        if (this.control.control.value !== this.el.nativeElement.value) {
            this.control.control.setValue(this.el.nativeElement.value);
        }
    }

    /**
     * 正常输入
     */
    @HostListener('input', ['$event']) onInput($event) {
        this.limitInput($event);
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onBlur = fn;
    }

    private limitInput($event) {
        if (!$event || !$event.target.value || this._isComposite) {
            return;
        }
        const target = $event.target;
        if (this.replaceFn) {
            this.replaceFn(this.el, $event);
            return;
        } else {
            this._regexp = this.getRegexp(this.replace);
            this.el.nativeElement.value = target.value.replace(this._regexp, '');
        }
        // 查看更新节点设置
        if (this.updateOn !== 'blur' && this.control.control.value !== this.el.nativeElement.value) {
            this.control.control.setValue(this.el.nativeElement.value);
        }
    }

    private getRegexp(str) {
        if (typeof str === 'object') {
            return str;
        }
        let regexp;
        switch (str) {
            case 'en':
                regexp = /(^\s|[\u4e00-\u9fa5])/g;
                break;
            case 'number':
                regexp = /[^0-9]/ig;
                break;
            case 'number|letter':
                regexp = /[^\d|\w]/ig;
                break;
            case 'float':
                // 支持输入中文句号，由decimalInputLimit()方法转换为小数点
                regexp = /[^\d|。|\.]/ig;
                break;
            case 'space':
                regexp = /\s/g;
                break;
            case 'password':
                // 半角数字、半角英文字母、半角符号、不包含空格和回车换行符
                regexp = /[^\w|!@#$%^&*()\-=_+[\]{}:";',./<>?\\`~]/ig;
                break;
            case '0-9a-Z':
                regexp = /[^0-9a-zA-Z]/ig;
                break;
        }
        return regexp;
    }
}
