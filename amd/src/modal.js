// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * CodeHighlighter for TinyMCE.
 *
 * @module      tiny_insertcode/modal
 * @copyright   2023 Nov <m.kowalski.nov7@gmail.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Modal from 'core/modal';
import ModalRegistry from 'core/modal_registry';

const HighlighterModal = class extends Modal {
    static TYPE = 'tiny_insertcode/modal';
    static TEMPLATE = 'tiny_insertcode/modal';

    registerEventListeners() {
        super.registerEventListeners();
        this.registerCloseOnSave();
        this.registerCloseOnCancel();
    }
};

ModalRegistry.register(HighlighterModal.TYPE, HighlighterModal, HighlighterModal.TEMPLATE);

export default HighlighterModal;
