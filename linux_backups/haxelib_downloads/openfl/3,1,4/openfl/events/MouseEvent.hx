package openfl.events; #if !flash #if !openfl_legacy


import openfl.display.InteractiveObject;
import openfl.geom.Point;


/**
 * A MouseEvent object is dispatched into the event flow whenever mouse events
 * occur. A mouse event is usually generated by a user input device, such as a
 * mouse or a trackball, that uses a pointer.
 *
 * <p>When nested nodes are involved, mouse events target the deepest possible
 * nested node that is visible in the display list. This node is called the
 * <i>target node</i>. To have a target node's ancestor receive notification
 * of a mouse event, use <code>EventDispatcher.addEventListener()</code> on
 * the ancestor node with the <code>type</code> parameter set to the specific
 * mouse event you want to detect.</p>
 * 
 */
class MouseEvent extends Event {
	
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>click</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var CLICK:String = "click";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>doubleClick</code> event object. The <code>doubleClickEnabled</code>
	 * property must be <code>true</code> for an object to generate the
	 * <code>doubleClick</code> event.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var DOUBLE_CLICK:String = "doubleClick";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>middleClick</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MIDDLE_CLICK:String = "middleClick";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>middleMouseDown</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MIDDLE_MOUSE_DOWN:String = "middleMouseDown";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>middleMouseUp</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MIDDLE_MOUSE_UP:String = "middleMouseUp";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>mouseDown</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MOUSE_DOWN:String = "mouseDown";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>mouseMove</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MOUSE_MOVE:String = "mouseMove";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>mouseOut</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MOUSE_OUT:String = "mouseOut";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>mouseOver</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MOUSE_OVER:String = "mouseOver";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>mouseUp</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MOUSE_UP:String = "mouseUp";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>mouseWheel</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var MOUSE_WHEEL:String = "mouseWheel";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>rightClick</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var RIGHT_CLICK:String = "rightClick";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>rightMouseDown</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var RIGHT_MOUSE_DOWN:String = "rightMouseDown";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>rightMouseUp</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var RIGHT_MOUSE_UP:String = "rightMouseUp";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>rollOut</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var ROLL_OUT:String = "rollOut";
	
	/**
	 * Defines the value of the <code>type</code> property of a
	 * <code>rollOver</code> event object.
	 *
	 * <p>This event has the following properties:</p>
	 */
	public static var ROLL_OVER:String = "rollOver";
	
	@:noCompletion private static var __altKey:Bool;
	@:noCompletion private static var __buttonDown:Bool;
	@:noCompletion private static var __commandKey:Bool;
	@:noCompletion private static var __ctrlKey:Bool;
	@:noCompletion private static var __shiftKey:Bool;
	
	
	/**
	 * Indicates whether the Alt key is active(<code>true</code>) or inactive
	 * (<code>false</code>). Supported for Windows only. On other operating
	 * systems, this property is always set to <code>false</code>.
	 */
	public var altKey:Bool;
	
	/**
	 * Indicates whether the primary mouse button is pressed(<code>true</code>)
	 * or not(<code>false</code>).
	 */
	public var buttonDown:Bool;
	public var commandKey:Bool;
	public var clickCount:Int;
	
	/**
	 * On Windows or Linux, indicates whether the Ctrl key is active
	 * (<code>true</code>) or inactive(<code>false</code>). On Macintosh,
	 * indicates whether either the Control key or the Command key is activated.
	 */
	public var ctrlKey:Bool;
	
	/**
	 * Indicates how many lines should be scrolled for each unit the user rotates
	 * the mouse wheel. A positive delta value indicates an upward scroll; a
	 * negative value indicates a downward scroll. Typical values are 1 to 3, but
	 * faster rotation may produce larger values. This setting depends on the
	 * device and operating system and is usually configurable by the user. This
	 * property applies only to the <code>MouseEvent.mouseWheel</code> event.
	 */
	public var delta:Int;
	
	/**
	 * The horizontal coordinate at which the event occurred relative to the
	 * containing sprite.
	 */
	public var localX:Float;
	
	/**
	 * The vertical coordinate at which the event occurred relative to the
	 * containing sprite.
	 */
	public var localY:Float;
	
	/**
	 * A reference to a display list object that is related to the event. For
	 * example, when a <code>mouseOut</code> event occurs,
	 * <code>relatedObject</code> represents the display list object to which the
	 * pointing device now points. This property applies to the
	 * <code>mouseOut</code>, <code>mouseOver</code>, <code>rollOut</code>, and
	 * <code>rollOver</code> events.
	 *
	 * <p>The value of this property can be <code>null</code> in two
	 * circumstances: if there no related object, or there is a related object,
	 * but it is in a security sandbox to which you don't have access. Use the
	 * <code>isRelatedObjectInaccessible()</code> property to determine which of
	 * these reasons applies.</p>
	 */
	public var relatedObject:InteractiveObject;
	
	/**
	 * Indicates whether the Shift key is active(<code>true</code>) or inactive
	 * (<code>false</code>).
	 */
	public var shiftKey:Bool;
	
	/**
	 * The horizontal coordinate at which the event occurred in global Stage
	 * coordinates. This property is calculated when the <code>localX</code>
	 * property is set.
	 */
	public var stageX:Float;
	
	/**
	 * The vertical coordinate at which the event occurred in global Stage
	 * coordinates. This property is calculated when the <code>localY</code>
	 * property is set.
	 */
	public var stageY:Float;
	
	
	/**
	 * Creates an Event object that contains information about mouse events.
	 * Event objects are passed as parameters to event listeners.
	 * 
	 * @param type          The type of the event. Possible values are:
	 *                      <code>MouseEvent.CLICK</code>,
	 *                      <code>MouseEvent.DOUBLE_CLICK</code>,
	 *                      <code>MouseEvent.MOUSE_DOWN</code>,
	 *                      <code>MouseEvent.MOUSE_MOVE</code>,
	 *                      <code>MouseEvent.MOUSE_OUT</code>,
	 *                      <code>MouseEvent.MOUSE_OVER</code>,
	 *                      <code>MouseEvent.MOUSE_UP</code>,
	 *                      <code>MouseEvent.MIDDLE_CLICK</code>,
	 *                      <code>MouseEvent.MIDDLE_MOUSE_DOWN</code>,
	 *                      <code>MouseEvent.MIDDLE_MOUSE_UP</code>,
	 *                      <code>MouseEvent.RIGHT_CLICK</code>,
	 *                      <code>MouseEvent.RIGHT_MOUSE_DOWN</code>,
	 *                      <code>MouseEvent.RIGHT_MOUSE_UP</code>,
	 *                      <code>MouseEvent.MOUSE_WHEEL</code>,
	 *                      <code>MouseEvent.ROLL_OUT</code>, and
	 *                      <code>MouseEvent.ROLL_OVER</code>.
	 * @param bubbles       Determines whether the Event object participates in
	 *                      the bubbling phase of the event flow.
	 * @param cancelable    Determines whether the Event object can be canceled.
	 * @param localX        The horizontal coordinate at which the event occurred
	 *                      relative to the containing sprite.
	 * @param localY        The vertical coordinate at which the event occurred
	 *                      relative to the containing sprite.
	 * @param relatedObject The complementary InteractiveObject instance that is
	 *                      affected by the event. For example, when a
	 *                      <code>mouseOut</code> event occurs,
	 *                      <code>relatedObject</code> represents the display
	 *                      list object to which the pointing device now points.
	 * @param ctrlKey       On Windows or Linux, indicates whether the Ctrl key
	 *                      is activated. On Mac, indicates whether either the
	 *                      Ctrl key or the Command key is activated.
	 * @param altKey        Indicates whether the Alt key is activated(Windows
	 *                      or Linux only).
	 * @param shiftKey      Indicates whether the Shift key is activated.
	 * @param buttonDown    Indicates whether the primary mouse button is
	 *                      pressed.
	 * @param delta         Indicates how many lines should be scrolled for each
	 *                      unit the user rotates the mouse wheel. A positive
	 *                      delta value indicates an upward scroll; a negative
	 *                      value indicates a downward scroll. Typical values are
	 *                      1 to 3, but faster rotation may produce larger
	 *                      values. This parameter is used only for the
	 *                      <code>MouseEvent.mouseWheel</code> event.
	 */
	public function new (type:String, bubbles:Bool = true, cancelable:Bool = false, localX:Float = 0, localY:Float = 0, relatedObject:InteractiveObject = null, ctrlKey:Bool = false, altKey:Bool = false, shiftKey:Bool = false, buttonDown:Bool = false, delta:Int = 0, commandKey:Bool = false, clickCount:Int = 0) {
		
		super (type, bubbles, cancelable);
		
		this.shiftKey = shiftKey;
		this.altKey = altKey;
		this.ctrlKey = ctrlKey;
		this.bubbles = bubbles;
		this.relatedObject = relatedObject;
		this.delta = delta;
		this.localX = localX;
		this.localY = localY;
		this.buttonDown = buttonDown;
		this.commandKey = commandKey;
		this.clickCount = clickCount;
		
	}
	
	
	@:noCompletion public static function __create (type:String, button:Int, stageX:Float, stageY:Float, local:Point, target:InteractiveObject, delta:Int = 0):MouseEvent {
		
		switch (type) {
			
			case MouseEvent.MOUSE_DOWN:
				
				__buttonDown = true;
				
			case MouseEvent.MOUSE_UP:
				
				__buttonDown = false;
			
			default:
			
		}
		
		var event = new MouseEvent (type, true, false, local.x, local.y, null, __ctrlKey, __altKey, __shiftKey, __buttonDown, delta, __commandKey);
		event.stageX = stageX;
		event.stageY = stageY;
		event.target = target;
		
		return event;
		
	}
	
	
	public override function clone ():Event {
		
		return new MouseEvent (type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, clickCount);
		
	}
	
	
	public override function toString ():String {
		
		return "[MouseEvent type=\"" + type + "\" bubbles=" + bubbles + " cancelable=" + cancelable + " localX=" + localX + " localY=" + localY + " relatedObject=" + relatedObject + " ctrlKey=" + ctrlKey + " altKey=" + altKey + " shiftKey=" + shiftKey + " buttonDown=" + buttonDown + " delta=" + delta + "]";
		
	}
	
	
	/**
	 * Instructs Flash Player or Adobe AIR to render after processing of this
	 * event completes, if the display list has been modified.
	 * 
	 */
	public function updateAfterEvent ():Void {
		
		
		
	}
	
	
}


#else
typedef MouseEvent = openfl._legacy.events.MouseEvent;
#end
#else
typedef MouseEvent = flash.events.MouseEvent;
#end