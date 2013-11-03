(function ($) {
	Drupal.behaviors.embed = {
        attach: function(context) {
        	// Attach embed buttons to all images from the specified field for embedding
            $('#edit-' + Drupal.settings.embed_image.field + ' .image-widget-data .file').each(function( index ) {
				$(this).before(
					'<input type="submit" class="form-submit embed-image" id="embed-image-' + (index+1) + '" onclick="return false;" value="Embed" style="float: right;" />'
				);
				// Set the click handler for each button
				$('#embed-image-' + (index+1)).click(embed);
			});

            // Set text area to use for embedding
			if (typeof(embedTextarea) == 'undefined') {
				embedTextarea = $('#edit-body textarea.text-full').get(0) || false;
			}

			// Keep track of the last active textarea
			$('textarea:not([name$="[data][title]"]):not(.embed-processed)', context).addClass('embed-processed').focus(embedSetActive).blur(embedRemoveActive);

			function embedSetActive() {
				embedTextarea = this;
				this.embedHasFocus = true;
			}

			function embedRemoveActive() {
				if (embedTextarea == this) {
					var thisTextarea = this;
					setTimeout(function() {
						thisTextarea.embedHasFocus = false;
					}, 1000);
				}
			}

		    function embed() {
		    	id = $(this).attr('id');
		    	token = '[image:' + id.substr(id.lastIndexOf('-') + 1) + ']';
				Drupal.embed.embedAtCursor(embedTextarea, token);
		    }
		}
	}

	Drupal.embed = {
		embedAtCursor: function(editor, token) {
			// Record the current scroll position
			var scroll = editor.scrollTop;

			// IE
			if (document.selection) {
				editor.focus();
				sel = document.selection.createRange();
				sel.text = token;
			}
			// Everyone else
			else if (editor.selectionStart || editor.selectionStart == '0') {
				var startPos = editor.selectionStart;
				var endPos = editor.selectionEnd;
				editor.value = editor.value.substring(0, startPos) + token + editor.value.substring(endPos, editor.value.length);
			}
			// If all else fails
			else {
				editor.value += token;
			}

			// Ensure the textarea does not unexpectedly scroll
			editor.scrollTop = scroll;
		}
    }
})(jQuery);
